import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressCoveragesComponent } from './press-coverages.component';

describe('PressCoveragesComponent', () => {
  let component: PressCoveragesComponent;
  let fixture: ComponentFixture<PressCoveragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressCoveragesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PressCoveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
