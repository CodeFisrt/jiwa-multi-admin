import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegistrationsComponent } from './vendor-registrations.component';

describe('VendorRegistrationsComponent', () => {
  let component: VendorRegistrationsComponent;
  let fixture: ComponentFixture<VendorRegistrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorRegistrationsComponent]
    });
    fixture = TestBed.createComponent(VendorRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
