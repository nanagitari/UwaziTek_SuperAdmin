import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationDetailsComponent } from './add-organization-details.component';

describe('AddOrganizationDetailsComponent', () => {
  let component: AddOrganizationDetailsComponent;
  let fixture: ComponentFixture<AddOrganizationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOrganizationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrganizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
