import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidenav } from './sidenav/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HeaderBar } from "./header-bar/header-bar";
import { HeaderFilterBar } from './header-filter-bar/header-filter-bar';
import { IdeaTabs } from "./idea-tabs/idea-tabs";
import { Pagination } from './pagination/pagination';
import { Statustabs } from './statustabs/statustabs';
import { IdeaDashboard } from './ideas/idea-dashboard/idea-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidenav, HeaderFilterBar, MatSidenavModule, MatButtonModule, HeaderBar, IdeaTabs, Pagination, Statustabs, IdeaDashboard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('alcon-rti');
}
