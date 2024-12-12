import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewRequestComponent } from './overview-request.component';

describe('OverviewRequestComponent', () => {
  let component: OverviewRequestComponent;
  let fixture: ComponentFixture<OverviewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
