import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewClaimsComponent } from './overview-claims.component';

describe('OverviewClaimsComponent', () => {
  let component: OverviewClaimsComponent;
  let fixture: ComponentFixture<OverviewClaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewClaimsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
