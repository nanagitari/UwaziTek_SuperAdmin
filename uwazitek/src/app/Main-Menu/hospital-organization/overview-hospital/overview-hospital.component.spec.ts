import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewHospitalComponent } from './overview-hospital.component';

describe('OverviewHospitalComponent', () => {
  let component: OverviewHospitalComponent;
  let fixture: ComponentFixture<OverviewHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewHospitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
