import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersAndPromotionsModalComponent } from './offers-and-promotions-modal.component';

describe('OffersAndPromotionsModalComponent', () => {
  let component: OffersAndPromotionsModalComponent;
  let fixture: ComponentFixture<OffersAndPromotionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersAndPromotionsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersAndPromotionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
