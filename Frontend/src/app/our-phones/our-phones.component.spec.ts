import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPhonesComponent } from './our-phones.component';

describe('OurPhonesComponent', () => {
  let component: OurPhonesComponent;
  let fixture: ComponentFixture<OurPhonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurPhonesComponent]
    });
    fixture = TestBed.createComponent(OurPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
