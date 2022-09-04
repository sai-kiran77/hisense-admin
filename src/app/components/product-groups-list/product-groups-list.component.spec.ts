import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupsListComponent } from './product-groups-list.component';

describe('ProductGroupsListComponent', () => {
  let component: ProductGroupsListComponent;
  let fixture: ComponentFixture<ProductGroupsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
