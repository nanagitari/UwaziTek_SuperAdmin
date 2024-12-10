import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancehomeComponent } from './insurancehome.component';

describe('InsurancehomeComponent', () => {
  let component: InsurancehomeComponent;
  let fixture: ComponentFixture<InsurancehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsurancehomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurancehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
