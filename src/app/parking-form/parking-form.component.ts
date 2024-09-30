import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ParkingSpotService } from '../services/parking-spot.service';
import { ParkingSpot } from '../services/parking-spot.service'; // Ensure the correct import path

@Component({
  selector: 'app-parking-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.css'],
})
export class ParkingFormComponent implements OnInit {
  parkingForm: FormGroup;
  parkingSpots: ParkingSpot[] = [];

  constructor(private parkingSpotService: ParkingSpotService) {
    this.parkingForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      selectedOption: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // Subscribe to parking spots observable to get the list of spots
    // use subscribe explicitly
    this.parkingSpotService.parkingSpotsObservable$.subscribe(spots => {
      this.parkingSpots = spots;
    });
  }

  onSubmit(): void {
    const { name, selectedOption } = this.parkingForm.value;
    const selectedSpot = this.parkingSpots.find(spot => spot.id === +selectedOption);

    if (selectedSpot) {
      this.parkingSpotService.bookSpot(selectedSpot.id, name);
      this.parkingForm.reset();
    }

    if(selectedSpot?.isBooked){
      alert("that spot is already booked");
    }
  }
}
