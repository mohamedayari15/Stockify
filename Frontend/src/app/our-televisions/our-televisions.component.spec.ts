import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTelevisionsComponent } from './our-televisions.component';

describe('OurTelevisionsComponent', () => {
  let component: OurTelevisionsComponent;
  let fixture: ComponentFixture<OurTelevisionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurTelevisionsComponent]
    });
    fixture = TestBed.createComponent(OurTelevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
