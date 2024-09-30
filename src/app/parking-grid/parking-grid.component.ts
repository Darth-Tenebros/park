import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingSpot, ParkingSpotService } from '../services/parking-spot.service';

@Component({
  selector: 'app-parking-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parking-grid.component.html',
  styleUrl: './parking-grid.component.css'
})
export class ParkingGridComponent {
  parkingSpots$: Observable<ParkingSpot[]> | undefined;

  // inject the ParkignSpotService into the component
  constructor(private parkingSpotService: ParkingSpotService){}

  ngOnInit(): void {
    // sub by assigning the observable directly..
    // through the injected service
    this.parkingSpots$ = this.parkingSpotService.parkingSpotsObservable$;
  }
}
