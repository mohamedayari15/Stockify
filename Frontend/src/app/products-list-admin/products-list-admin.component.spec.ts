import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListAdminComponent } from './products-list-admin.component';

describe('ProductsListAdminComponent', () => {
  let component: ProductsListAdminComponent;
  let fixture: ComponentFixture<ProductsListAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListAdminComponent]
    });
    fixture = TestBed.createComponent(ProductsListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
