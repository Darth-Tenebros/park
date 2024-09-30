import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';



export interface ParkingSpot{
  id: number;
  isBooked: boolean;
  bookedBy?: string;
}



@Injectable({
  providedIn: 'root'
})
export class ParkingSpotService {

  constructor() { }

  private parkingSpots: ParkingSpot[] = [
    { id: 1, isBooked: false },
    { id: 2, isBooked: false },
    { id: 3, isBooked: false },
    { id: 4, isBooked: false },
    { id: 5, isBooked: false },
    { id: 6, isBooked: false },
    { id: 7, isBooked: false },
    { id: 8, isBooked: false },
    { id: 9, isBooked: false },
  ];

  // a behaviour subject holds the current value (state) and emits it to any subscribers
  // initialise it with the (current) list of spots
  private spotsSubject = new BehaviorSubject<ParkingSpot[]>(this.parkingSpots);

  // spots$ is an observable stream that will emit the current parking spots when accessed
  parkingSpotsObservable$: Observable<ParkingSpot[]> = this.spotsSubject.asObservable();

  bookSpot(id: number, bookedBy: string): void {

    // find the spot
    const updatedSpots = this.parkingSpots.map(spot => 
      // once found, update the isBooked and bookedBy fields
      spot.id === id && !spot.isBooked ? { ...spot, isBooked: true, bookedBy } : spot
    );

    // update the spotsSubject
    // all components or services that subscribed to spotsSubject or any derived observables (spots$)
    // will get the updated state
    this.spotsSubject.next(updatedSpots);
  }

}
