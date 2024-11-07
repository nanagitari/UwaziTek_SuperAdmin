import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimReportsComponent } from './claim-reports.component';

describe('ClaimReportsComponent', () => {
  let component: ClaimReportsComponent;
  let fixture: ComponentFixture<ClaimReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
