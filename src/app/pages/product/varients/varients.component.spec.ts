import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarientsComponent } from './varients.component';

describe('VarientsComponent', () => {
  let component: VarientsComponent;
  let fixture: ComponentFixture<VarientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VarientsComponent]
    });
    fixture = TestBed.createComponent(VarientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
