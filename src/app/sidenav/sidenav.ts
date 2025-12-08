import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
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
