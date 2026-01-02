import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';

export interface DropdownOption<T = any> {
  value: T;
  viewValue: string;
}

@Component({
  selector: 'app-label-select',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatIconModule,
  ],
  templateUrl: './label-select.html',
  styleUrls: ['./label-select.scss'],
})
export class LabelSelect<T = any> implements OnInit {
  @Input() label!: string;
  @Input() type: 'text' | 'textarea' | 'select' = 'text';
  @Input() options: DropdownOption<T>[] = [];
  @Input() required: boolean = false;
  @Input() value: any;
  @Input() searchPlaceholder = 'Search';
  @Input() isDisabled = false;

  /** Control for custom select */
  @Input() control: FormControl<T | null> = new FormControl<T | null>(null);

  /** Search box control */
  search = new FormControl<string>('');

  /** Emits when value changes */
  @Output() valueChange = new EventEmitter<T | string>();

  submitted = false;

  ngOnInit(): void {
    console.log('LabelSelect initialized with label:', this.label);
  }

  onValueChange(newValue: T | string) {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  onSelectionChange(value: T | null) {
    this.valueChange.emit(value as T);
  }

  /** Filtered options for custom select */
  get filteredOptions(): DropdownOption<T>[] {
    const term = (this.search.value ?? '').toLowerCase().trim();
    return term
      ? this.options.filter((o) => o.viewValue.toLowerCase().includes(term))
      : this.options;
  }

  markSubmitted(markTouched = true) {
    this.submitted = true;
    if (markTouched && this.control) {
      this.control.markAsTouched();
    }
  }
}
