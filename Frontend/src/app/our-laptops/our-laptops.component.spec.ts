import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLaptopsComponent } from './our-laptops.component';

describe('OurLaptopsComponent', () => {
  let component: OurLaptopsComponent;
  let fixture: ComponentFixture<OurLaptopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurLaptopsComponent]
    });
    fixture = TestBed.createComponent(OurLaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
