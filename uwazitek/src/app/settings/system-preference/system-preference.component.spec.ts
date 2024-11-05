import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPreferenceComponent } from './system-preference.component';

describe('SystemPreferenceComponent', () => {
  let component: SystemPreferenceComponent;
  let fixture: ComponentFixture<SystemPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemPreferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
