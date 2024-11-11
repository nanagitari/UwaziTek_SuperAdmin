import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyHolderComponent } from './policy-holder.component';

describe('PolicyHolderComponent', () => {
  let component: PolicyHolderComponent;
  let fixture: ComponentFixture<PolicyHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
