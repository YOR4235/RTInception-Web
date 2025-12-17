import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-header-filter-bar',
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule],
  templateUrl: './header-filter-bar.html',
  styleUrl: './header-filter-bar.scss',
})
export class HeaderFilterBar {

}
