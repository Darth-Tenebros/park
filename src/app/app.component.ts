import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParkingFormComponent } from './parking-form/parking-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParkingFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'park';
}
