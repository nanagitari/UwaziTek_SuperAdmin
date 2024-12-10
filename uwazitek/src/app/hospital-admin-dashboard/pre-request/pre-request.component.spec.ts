import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRequestComponent } from './pre-request.component';

describe('PreRequestComponent', () => {
  let component: PreRequestComponent;
  let fixture: ComponentFixture<PreRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
