import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitaldashboardComponent } from './hospitaldashboard.component';

describe('HospitaldashboardComponent', () => {
  let component: HospitaldashboardComponent;
  let fixture: ComponentFixture<HospitaldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitaldashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitaldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
