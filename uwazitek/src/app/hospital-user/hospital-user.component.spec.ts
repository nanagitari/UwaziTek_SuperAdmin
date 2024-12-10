import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalUserComponent } from './hospital-user.component';

describe('HospitalUserComponent', () => {
  let component: HospitalUserComponent;
  let fixture: ComponentFixture<HospitalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
