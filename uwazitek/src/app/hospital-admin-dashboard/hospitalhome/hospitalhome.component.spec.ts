import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalhomeComponent } from './hospitalhome.component';

describe('HospitalhomeComponent', () => {
  let component: HospitalhomeComponent;
  let fixture: ComponentFixture<HospitalhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
