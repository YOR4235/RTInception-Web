import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Idea } from '../models/idea';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { IdeaService } from '../ideas/idea.service';
import { IdeaEventsService } from '../events/ideaServiceEvents';

@Component({
  selector: 'app-statustabs',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTabsModule,MatDividerModule, RouterModule],
  templateUrl: './statustabs.html',
  styleUrl: './statustabs.scss',
})
export class Statustabs {

  @Input() tabs: any[] = [];
  activeTab: string = 'All';

  constructor(private ideaEvents: IdeaEventsService) {}

  selectTab(tab: any) {
    this.activeTab = tab.label;
    // publish event globally
    this.ideaEvents.applyFilterByStatus(tab.label);
  }

}