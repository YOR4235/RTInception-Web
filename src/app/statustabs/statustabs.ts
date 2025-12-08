import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Idea } from '../models/idea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statustabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statustabs.html',
  styleUrl: './statustabs.css',
})
export class Statustabs {

  @Input() ideas: Idea[] = [];
  @Output() createIdea = new EventEmitter<void>();
  @Output() exportIdeas = new EventEmitter<void>();
  @Output() filterByStatus = new EventEmitter<string>();

  // compute counts dynamically
  getCount(status: string): number {
    if (status === 'All') return this.ideas.length;
    return this.ideas.filter(i => i.status.toLowerCase() === status.toLowerCase()).length;
  }

  onFilter(status: string): void {
    this.filterByStatus.emit(status);
  }

  onCreate(): void {
    this.createIdea.emit();
  }

  onExport(): void {
    this.exportIdeas.emit();
  }

}
