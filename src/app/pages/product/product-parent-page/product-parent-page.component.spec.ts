import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParentPageComponent } from './product-parent-page.component';

describe('ProductParentPageComponent', () => {
  let component: ProductParentPageComponent;
  let fixture: ComponentFixture<ProductParentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductParentPageComponent]
    });
    fixture = TestBed.createComponent(ProductParentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
