import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantyInfoModalComponent } from './warranty-info-modal.component';

describe('WarrantyInfoModalComponent', () => {
  let component: WarrantyInfoModalComponent;
  let fixture: ComponentFixture<WarrantyInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantyInfoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrantyInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
