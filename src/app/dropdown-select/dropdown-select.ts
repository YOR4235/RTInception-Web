import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

export interface DropdownOption<T = any> {
  value: T;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './dropdown-select.html',
  styleUrls: ['./dropdown-select.scss'],
})
export class DropdownSelect<T = any> {

  /** Required flag */
  @Input() required = false;

  /** Placeholder for search input */
  @Input() searchPlaceholder = 'Search';

  /** Options to render */
  @Input() options: DropdownOption<T>[] = [];

  /** Reactive form control bound to dropdown */
  @Input({ required: true }) control!: FormControl<T | null>;

  /** Emits when selection changes */
  @Output() selectionChange = new EventEmitter<T | null>();

  /** Search term */
  search = new FormControl<string>('');

  submitted = false;

  /** Filtered options */
  get filteredOptions(): DropdownOption<T>[] {
    const term = (this.search.value ?? '').toLowerCase().trim();
    return term
      ? this.options.filter((o) => o.viewValue.toLowerCase().includes(term))
      : this.options;
  }

  onSelectionChange(value: T | null) {
    this.selectionChange.emit(value);
  }

  markSubmitted(markTouched = true) {
    this.submitted = true;
    if (markTouched && this.control) {
      this.control.markAsTouched();
    }
  }
}
