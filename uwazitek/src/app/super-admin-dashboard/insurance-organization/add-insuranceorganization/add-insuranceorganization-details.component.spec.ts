import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsuranceorganizationDetailsComponent } from './add-insuranceorganization-details.component';

describe('AddInsuranceorganizationDetailsComponent', () => {
  let component: AddInsuranceorganizationDetailsComponent;
  let fixture: ComponentFixture<AddInsuranceorganizationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInsuranceorganizationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInsuranceorganizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
