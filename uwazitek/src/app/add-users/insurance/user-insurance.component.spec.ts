import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInsuranceComponent } from './user-insurance.component';

describe('UserInsuranceComponent', () => {
  let component: UserInsuranceComponent;
  let fixture: ComponentFixture<UserInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
