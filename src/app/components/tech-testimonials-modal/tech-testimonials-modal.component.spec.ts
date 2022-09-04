import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTestimonialsModalComponent } from './tech-testimonials-modal.component';

describe('TechTestimonialsModalComponent', () => {
  let component: TechTestimonialsModalComponent;
  let fixture: ComponentFixture<TechTestimonialsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTestimonialsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechTestimonialsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
