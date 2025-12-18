import { Component, Input } from '@angular/core';
import { IdeaEventsService } from '../events/ideaServiceEvents';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {

  @Input() totalPages: number = 11;
  @Input() currentPage: number = 1;
  pageSize: number = 11;

  constructor(private ideaEvents: IdeaEventsService) {}
  
get paginationItems(): (number | 'ellipsis')[] {
    const items: (number | 'ellipsis')[] = [];

    // If small totals, just show all pages (no ellipsis)
    if (this.totalPages <= 6) {
      for (let i = 1; i <= this.totalPages; i++) items.push(i);
      return items;
    }

  // Always show pages 1..5
    for (let i = 1; i <= 5; i++) items.push(i);

    // If there are pages between 5 and last, show a single ellipsis
    if (this.totalPages > 6) {
      items.push('ellipsis');
    }

    // Always show last page
    items.push(this.totalPages);

    return items;
  }


  prev() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.ideaEvents.changePage(this.currentPage);
    }
  }

  next() {
    this.currentPage++;
    this.ideaEvents.changePage(this.currentPage);
  }

  selectPage(page: number) {
    this.currentPage = page;
    this.ideaEvents.changePage(this.currentPage);
  }

}
