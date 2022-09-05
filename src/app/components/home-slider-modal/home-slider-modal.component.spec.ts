import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSliderModalComponent } from './home-slider-modal.component';

describe('HomeSliderModalComponent', () => {
  let component: HomeSliderModalComponent;
  let fixture: ComponentFixture<HomeSliderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSliderModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSliderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
