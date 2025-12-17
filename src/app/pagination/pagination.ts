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

  @Input() totalPages: number = 10;
  @Input() currentPage: number = 1;
  pageSize: number = 10;

  constructor(private ideaEvents: IdeaEventsService) {}

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
