import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button-select',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './button-select.html',
  styleUrl: './button-select.scss',
})
export class ButtonSelect {
  @Input() variant: 'type1' | 'type2'  = 'type1';
  @Input() color:  string = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() disabled: boolean = false;
}
