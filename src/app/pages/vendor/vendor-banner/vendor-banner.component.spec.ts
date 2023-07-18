import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorBannerComponent } from './vendor-banner.component';

describe('VendorBannerComponent', () => {
  let component: VendorBannerComponent;
  let fixture: ComponentFixture<VendorBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendorBannerComponent]
    });
    fixture = TestBed.createComponent(VendorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
