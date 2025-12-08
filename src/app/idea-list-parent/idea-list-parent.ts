import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Idea } from '../models/idea';
import { LoadIdeas } from '../ideas/idea.actions';
import { IdeaList } from '../idea-list/idea-list';
import { CommonModule } from '@angular/common';
import { Statustabs } from '../statustabs/statustabs';

@Component({
  selector: 'app-idea-list-parent',
  imports: [CommonModule, Statustabs, IdeaList],
  templateUrl: './idea-list-parent.html',
  styleUrls: ['./idea-list-parent.css']
})
export class IdeaListParent implements OnInit {
  ideas$: Observable<Idea[]>;
  ideas: Idea[] = [];
  pagedIdeas: Idea[] = [];
  currentPage = 1;
  pageSize = 7;
  totalPages = 0;

  constructor(private store: Store<AppState>) {
    this.ideas$ = this.store.pipe(select((state) => state.ideas));
    console.log('IdeaListParent component initialized');
  }

  ngOnInit(): void {
    // load ideas from store
    this.store.dispatch(LoadIdeas());

    // subscribe to ideas and calculate pagination
    this.ideas$.subscribe((ideas) => {
      this.ideas = ideas;
      this.totalPages = Math.ceil(this.ideas.length / this.pageSize);
      this.updatePagedIdeas();
    });
  }

  updatePagedIdeas(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedIdeas = this.ideas.slice(start, start + this.pageSize);
    console.log('Paged Ideas updated:', this.pagedIdeas);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePagedIdeas();
  }
}
