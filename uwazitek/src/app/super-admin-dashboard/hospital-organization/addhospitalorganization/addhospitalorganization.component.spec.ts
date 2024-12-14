import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhospitalorganizationComponent } from './addhospitalorganization.component';

describe('AddhospitalorganizationComponent', () => {
  let component: AddhospitalorganizationComponent;
  let fixture: ComponentFixture<AddhospitalorganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddhospitalorganizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhospitalorganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
