import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressCoverageModalComponent } from './press-coverage-modal.component';

describe('PressCoverageModalComponent', () => {
  let component: PressCoverageModalComponent;
  let fixture: ComponentFixture<PressCoverageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressCoverageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressCoverageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
