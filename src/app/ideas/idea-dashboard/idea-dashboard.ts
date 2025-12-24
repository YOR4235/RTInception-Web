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
import { TableHeadingAdd } from '../table-heading-add/table-heading-add';
import { HeaderBar } from '../../header-bar/header-bar';

@Component({
  selector: 'app-idea-dashboard',
  standalone: true,
  imports: [IdeaTable, Pagination, HeaderFilterBar,TableHeadingAdd, Statustabs, HeaderBar],
  templateUrl: './idea-dashboard.html',
  styleUrls: ['./idea-dashboard.scss'],
})
export class IdeaDashboard implements OnInit, OnDestroy {
  ideaDisplayColumns: TableColumn[] = [
    { key: 'idea_id', label: 'ID', sortable: true },
    { key: 'research_pathway', label: 'RP', sortable: true },
    { key: 'rti_year', label: 'Year', sortable: true },
    { key: 'therapeutic_area', label: 'Therapeutic Area', sortable: true },
    { key: 'target_aspirational_claim', label: 'Target Aspirational Claim', sortable: true },
    { key: 'status', label: 'Status', sortable: true }
  ];

  ideas$: Observable<Idea[]>;
  ideas: Idea[] = [];            
  filteredIdeas: Idea[] = [];    
  pagedIdeas: Idea[] = [];     
  currentPage = 1;
  pageSize = 5;
  totalPages = 1;

  statusTabs = [
    { label: 'All', count: 0 },
    { label: 'Open', count: 0 },
    { label: 'On Hold', count: 0 },
    { label: 'Closed', count: 0 }
  ];
  

  private sub!: Subscription;
  
  constructor(private store: Store<AppState>, private ideaEvents: IdeaEventsService) {
    this.ideas$ = this.store.pipe(select((state) => state.ideas));
  }
  
  ngOnInit(): void {
    this.store.dispatch(LoadIdeas());
  
    this.ideas$.subscribe((ideas) => {
      this.ideas = ideas;
      this.filteredIdeas = [...ideas]; // initialize working list
      this.totalPages = Math.ceil(this.filteredIdeas.length / this.pageSize);
      this.updatePagedIdeas();
    });

    this.sub = this.ideaEvents.events$.subscribe(event => {
      if (event.type === 'filter') {
        this.applyFilter(event.payload);
      } else if (event.type === 'page') {
        this.changePage(event.payload);
      } else if (event.type === 'sort') {
        this.sortBy(event.payload.column as keyof Idea, event.payload.direction);
      } else if (event.type === 'statusTab') {
        this.filterByStatus(event.payload.status);
      }
    });
    this.updateStatusCounts();
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  updatePagedIdeas(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedIdeas = this.filteredIdeas.slice(startIndex, startIndex + this.pageSize);
  }

  updateStatusCounts(): void {
    this.statusTabs[0].count = this.ideas.length; // All
    this.statusTabs[1].count = this.ideas.filter(i => i.status === 'Open').length;
    this.statusTabs[2].count = this.ideas.filter(i => i.status === 'On Hold').length;
    this.statusTabs[3].count = this.ideas.filter(i => i.status === 'Closed').length;
  }


  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagedIdeas();
    }
  }

  applyFilter(criteria: string) {
    this.filteredIdeas = this.ideas.filter(idea =>
      Object.values(idea).some(val =>
        val?.toString().toLowerCase().includes(criteria.toLowerCase())
      )
    );
    this.totalPages = Math.ceil(this.filteredIdeas.length / this.pageSize);
    this.currentPage = 1; // reset to first page
    this.updatePagedIdeas();
  }

  filterByStatus(status: string) {
    if (status === 'All') {
      this.filteredIdeas = [...this.ideas];
    } else {
      this.filteredIdeas = this.ideas.filter(i => i.status === status);
    }
    this.totalPages = Math.ceil(this.filteredIdeas.length / this.pageSize);
    this.currentPage = 1;
    this.updatePagedIdeas();
  }

  sortBy(column: keyof Idea, direction: 'asc' | 'desc') {
    console.log(`Sorting by ${column} in ${direction} order`);
    const dir = direction === 'asc' ? 1 : -1;
    this.filteredIdeas = [...this.filteredIdeas].sort((a, b) => {
      const av = a[column] as any;
      const bv = b[column] as any;
      if (av < bv) return -1 * dir;
      if (av > bv) return 1 * dir;
      return 0;
    });
    this.updatePagedIdeas();
  }
}
