import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Idea } from '../models/idea';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-statustabs',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTabsModule,MatDividerModule],
  templateUrl: './statustabs.html',
  styleUrl: './statustabs.scss',
})
export class Statustabs {

  @Input() ideas: Idea[] = [];
  @Output() createIdea = new EventEmitter<void>();
  @Output() exportIdeas = new EventEmitter<void>();
  @Output() filterByStatus = new EventEmitter<string>();

  constructor(private router: Router) {}

  // compute counts dynamically
  getCount(status: string): number {
    if (status === 'All') return this.ideas.length;
    return this.ideas.filter(i => i.status.toLowerCase() === status.toLowerCase()).length;
  }

  onFilter(status: string): void {
    this.filterByStatus.emit(status);
  }

  onCreate(): void {
    this.router.navigate(['/addidea']);
    this.createIdea.emit();
  }

  onExport(): void {
    this.exportIdeas.emit();
  }

}
