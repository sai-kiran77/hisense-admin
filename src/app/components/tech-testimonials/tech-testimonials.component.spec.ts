import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTestimonialsComponent } from './tech-testimonials.component';

describe('TechTestimonialsComponent', () => {
  let component: TechTestimonialsComponent;
  let fixture: ComponentFixture<TechTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechTestimonialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
