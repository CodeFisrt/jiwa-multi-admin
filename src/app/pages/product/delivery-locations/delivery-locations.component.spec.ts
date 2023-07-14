import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryLocationsComponent } from './delivery-locations.component';

describe('DeliveryLocationsComponent', () => {
  let component: DeliveryLocationsComponent;
  let fixture: ComponentFixture<DeliveryLocationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryLocationsComponent]
    });
    fixture = TestBed.createComponent(DeliveryLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
