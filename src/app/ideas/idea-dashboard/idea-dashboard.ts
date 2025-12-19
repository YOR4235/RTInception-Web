import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../app.state';
import { Idea } from '../../models/idea';
import { LoadIdeas } from '../../ideas/idea.actions';
import { IdeaEventsService } from '../../events/ideaServiceEvents';
import { IdeaTable } from '../idea-table/idea-table';
import { Pagination } from '../../pagination/pagination';
import { TableColumn } from '../idea-table/idea-table';
import { HeaderFilterBar } from '../../header-filter-bar/header-filter-bar';
import { Statustabs } from '../../statustabs/statustabs';

@Component({
  selector: 'app-idea-dashboard',
  standalone: true,
  imports: [IdeaTable, Pagination, HeaderFilterBar, Statustabs],
  templateUrl: './idea-dashboard.html',
  styleUrls: ['./idea-dashboard.scss'],
})
export class IdeaDashboard implements OnInit, OnDestroy {
  ideaDisplayColumns: TableColumn[] = [
    { key: 'idea_id', label: 'ID', sortable: true },
    { key: 'research_pathway', label: 'RP', sortable: true },
    { key: 'rti_year', label: 'Year', sortable: true },
    { key: 'therapeutic_area', label: 'Therapeutic Area', sortable: true },
    { key: 'target_aspirational_claim', label: 'Target Aspirational Claim', sortable: true }
  ];
  

  ideas$: Observable<Idea[]>;
  ideas: Idea[] = [];
  pagedIdeas: Idea[] = [];

  currentPage = 1;
  pageSize = 5;
  totalPages = 1;

  private sub!: Subscription;
  
  constructor(private store: Store<AppState>, private ideaEvents: IdeaEventsService) {
    this.ideas$ = this.store.pipe(select((state) => state.ideas));
  }
  
  ngOnInit(): void {
    this.store.dispatch(LoadIdeas());
  
    this.ideas$.subscribe((ideas) => {
      this.ideas = ideas;
      this.totalPages = Math.ceil(this.ideas.length / this.pageSize);
      this.updatePagedIdeas();
    });

    this.sub = this.ideaEvents.events$.subscribe(event => {
      if (event.type === 'filter') {
        this.applyFilter(event.payload);
      } else if (event.type === 'page') {
        this.changePage(event.payload);
      } else if (event.type === 'sort') {
        console.log("Sorting by event received in dashboard", event.payload);
        this.sortBy(event.payload.column as keyof Idea, event.payload.direction);
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  updatePagedIdeas(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedIdeas = this.ideas.slice(startIndex, startIndex + this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagedIdeas();
    }
  }

  applyFilter(criteria: string) {
    const filtered = this.ideas.filter(idea =>
      Object.values(idea).some(val =>
        val?.toString().toLowerCase().includes(criteria.toLowerCase())
      )
    );
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedIdeas = filtered.slice(startIndex, startIndex + this.pageSize);
  }

  sortBy(column: keyof Idea, direction: 'asc' | 'desc') {
    const dir = direction === 'asc' ? 1 : -1;
  
    // Clone the array before sorting to avoid mutating NgRx state
    const sorted = [...this.ideas].sort((a, b) => {
      const av = a[column] as any;
      const bv = b[column] as any;
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
  
    this.ideas = sorted;
    this.updatePagedIdeas();
  }
  
}
