import { Component, Input, OnInit } from '@angular/core';
import { Idea } from '../models/idea';
import { CommonModule } from '@angular/common';
import { FilterSearch } from '../filter-search/filter-search';

@Component({
  selector: 'idea-list',
  standalone: true,
  imports: [CommonModule, FilterSearch],
  templateUrl: './idea-list.html',
  styleUrls: ['./idea-list.css'],
})
export class IdeaList implements OnInit {
  @Input() pagedIdeas: Idea[] = [];
  filteredIdeas: Idea[] = [];

  sortDirection: { [key in keyof Idea]?: 'asc' | 'desc' } = {};
  filters: { [key in keyof Idea]?: string } = {};

  activeFilterColumn: keyof Idea | null = null;

  ngOnInit(): void {
    this.filteredIdeas = [...this.pagedIdeas];
  }

  sortBy(column: keyof Idea) {
    this.sortDirection[column] = this.sortDirection[column] === 'asc' ? 'desc' : 'asc';
    const dir = this.sortDirection[column] === 'asc' ? 1 : -1;
    this.filteredIdeas.sort((a, b) => {
      if (a[column] < b[column]) return -1 * dir;
      if (a[column] > b[column]) return 1 * dir;
      return 0;
    });
  }

  // Simple text filter
  applyFilter(column: keyof Idea, value: string) {
    if (!value) {
      delete this.filters[column];
    } else {
      this.filters[column] = value.toLowerCase();
    }
    this.updateFilteredIdeas();
  }

  updateFilteredIdeas() {
    this.filteredIdeas = this.pagedIdeas.filter(idea => {
      return Object.keys(this.filters).every(col => {
        const filterValue = this.filters[col as keyof Idea];
        const cellValue = (idea as any)[col]?.toString().toLowerCase();
        return !filterValue || cellValue.includes(filterValue);
      });
    });
  }

  // Distinct value filter from popup
  applyFilter1(column: keyof Idea, selectedValues: string[]) {
    this.filteredIdeas = this.pagedIdeas.filter(idea =>
      selectedValues.includes((idea as any)[column])
    );
    console.log('Filtered Ideas:', this.filteredIdeas);
    //this.closeFilter();
  }

  uniqueValues1(column: keyof Idea): string[] {
    return [...new Set(this.pagedIdeas.map(idea => (idea as any)[column]))];
  }

  openFilter(column: keyof Idea) {
    this.activeFilterColumn = column;
  }

  closeFilter() {
    this.activeFilterColumn = null;
  }
}
