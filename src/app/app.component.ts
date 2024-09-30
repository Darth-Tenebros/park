import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParkingFormComponent } from './parking-form/parking-form.component';
import { ParkingGridComponent } from './parking-grid/parking-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParkingFormComponent, ParkingGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'park';
}
