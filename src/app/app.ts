import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidenav } from './sidenav/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HeaderGc } from './header-gc/header-gc';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidenav, MatSidenavModule, MatButtonModule, HeaderGc],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('alcon-rti');
}
