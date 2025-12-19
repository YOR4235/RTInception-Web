import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Rtinception } from '../logo/rtinception/rtinception';

@Component({
  selector: 'app-header-bar',
  imports: [ MatIconModule, Rtinception],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.scss',
})
export class HeaderBar {

  userName : string = 'Karthik Perisetti';

}
