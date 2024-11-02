import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-insurance',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './user-insurance.component.html',
  styleUrl: './user-insurance.component.css'
})
export class UserInsuranceComponent {
  insuranceForm: FormGroup;

  constructor (private formBuilder: FormBuilder){
    this.insuranceForm = this.formBuilder.group({
      insuranceName:['',Validators.required],
      insuranceAddress:['', Validators.required],
      phoneNumber:['',Validators.required],
    })
  }


}
