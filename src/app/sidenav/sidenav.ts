import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {
  menuItems = [
    { label: 'Dashboard', icon: '' },
    { label: 'SEAR Groups', icon: '' },
    { label: 'Contact Information', icon: '' },
    { label: 'Logout', icon: '' }
  ];

  onMenuClick(item: string): void {
    console.log(`${item} clicked`);
    // Here you can add routing logic or emit events
  }

}
