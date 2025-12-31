import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DropdownOption } from '../dropdown-select/dropdown-select';
import { ButtonSelect } from '../button-select/button-select';
import { LabelSelect } from '../label-select/label-select';


@Component({
  selector: 'app-addidea',
  standalone: true,
  imports: [
    ButtonSelect,
    LabelSelect,
    ReactiveFormsModule
  ],
  templateUrl: './addidea.html',
  styleUrl: './addidea.scss',
})
export class Addidea {
  
  // Reactive form
  form = new FormGroup({
    productOrProject: new FormControl<string | null>(null, Validators.required),
  });

  // Options
  productOptions: DropdownOption<string>[] = [
    { value: 'DAILIES TOTAL1 Sphere', viewValue: 'DAILIES TOTAL1 Sphere' },
    { value: 'DAILIES AquaComfort Plus Toric', viewValue: 'DAILIES AquaComfort Plus Toric' },
    { value: 'DAILIES Colors', viewValue: 'DAILIES Colors' },
  ];

  user = {
    name: 'Jane Doe',
    role: 'Product Manager',
    avatarUrl: 'assets/avatar/jane-doe.jpg',
    country: 'India'
  };

  onProductChange(value: string | null) {
    console.log('Selected:', value);
  }
}
