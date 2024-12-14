import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewInsuranceComponent } from './overview-insurance.component';

describe('OverviewInsuranceComponent', () => {
  let component: OverviewInsuranceComponent;
  let fixture: ComponentFixture<OverviewInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewInsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
