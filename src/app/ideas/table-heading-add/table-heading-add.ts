import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-heading-add',
  imports: [RouterModule, MatIconModule, MatDividerModule],
  templateUrl: './table-heading-add.html',
  styleUrl: './table-heading-add.scss',
})
export class TableHeadingAdd {

}
