import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingGridComponent } from './parking-grid.component';

describe('ParkingGridComponent', () => {
  let component: ParkingGridComponent;
  let fixture: ComponentFixture<ParkingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
