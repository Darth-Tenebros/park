import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parking-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './parking-form.component.html',
  styleUrl: './parking-form.component.css',
})
export class ParkingFormComponent {

  options = ['option 1', 'option 2', 'option 3']

  parkingForm = new FormGroup({
    name: new FormControl(''),
    selectedOption: new FormControl(''),
  });




  onSubmit(): void{

  }
}
