import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-search',
  imports: [CommonModule],
  templateUrl: './filter-search.html',
  styleUrl: './filter-search.css',
})
export class FilterSearch {

  @Input() columnName!: string;
  @Input() values: string[] = [];
  @Output() filterChanged = new EventEmitter<string[]>();
  @Output() closePopup = new EventEmitter<void>();

  searchTerm: string = '';
  selectedValues: Set<string> = new Set();

  ngOnInit() {
    this.selectedValues = new Set(this.values); // initially all selected
    this.emitSelection();
  }

  onSearchChange(value: string) {
    this.searchTerm = value.toLowerCase();
    this.selectedValues = new Set(
      this.values.filter(v => v.toLowerCase().includes(this.searchTerm))
    );
    this.emitSelection();
    console.log(this.selectedValues);
  }

  toggleValue(val: string, checked: boolean) {
    if (checked) {
      this.selectedValues.add(val);
    } else {
      this.selectedValues.delete(val);
    }
    this.emitSelection();
    console.log(this.selectedValues);
  }

  emitSelection() {
    this.filterChanged.emit(Array.from(this.selectedValues));
  }

  close() {
    this.closePopup.emit();
  }

}
