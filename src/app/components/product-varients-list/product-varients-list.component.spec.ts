import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVarientsListComponent } from './product-varients-list.component';

describe('ProductVarientsListComponent', () => {
  let component: ProductVarientsListComponent;
  let fixture: ComponentFixture<ProductVarientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVarientsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductVarientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
