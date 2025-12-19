import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { IdeaEventsService } from '../../events/ideaServiceEvents';
import { Idea } from '../../models/idea';

export interface TableColumn {
  key: keyof Idea; // property name in data
  label: string; // header label
  sortable?: boolean; // enable sorting
}

@Component({
  selector: 'app-idea-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './idea-table.html',
  styleUrls: ['./idea-table.scss'],
})
export class IdeaTable {
  @Input() columns: TableColumn[] = [];
  @Input() dataSource: any[] = [];

  displayedColumns: string[] = [];

  // No column sorted initially
  private currentSortColumn: string | null = null;

  // No direction until the first click
  private currentDirection: 'asc' | 'desc' | null = null;

  constructor(private ideaEvents: IdeaEventsService) {}

  ngOnInit() {
    this.displayedColumns = this.columns.map((c) => c.key);
  }

  onSort(column: keyof Idea) {
    if (this.currentSortColumn === column) {
      // Toggle if clicking the same column
      this.currentDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // New column → start at asc
      this.currentSortColumn = column;
      this.currentDirection = 'asc';
    }

    // Raise global sort event
    this.ideaEvents.sortByColumn(this.currentSortColumn, this.currentDirection);
  }

  getDirection(column: keyof Idea): 'asc' | 'desc' | null {
    // Only show icon for the active column
    return this.currentSortColumn === column ? this.currentDirection : null;
  }
}
