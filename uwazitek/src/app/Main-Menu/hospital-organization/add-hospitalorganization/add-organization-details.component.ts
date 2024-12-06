import { Component } from '@angular/core';
//import { HospitalOrganizationModule } from '../hospital-organization.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
//import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-organization-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatButtonModule,
      MatInputModule, MatStepperModule],
  templateUrl: './add-organization-details.component.html',
  styleUrl: './add-organization-details.component.css'
})
export class AddOrganizationDetailsComponent {
  organizationFormGroup: FormGroup;
  adminFormGroup: FormGroup;


  constructor ( private formBuilder:FormBuilder){
    this.organizationFormGroup = this.formBuilder.group({
      hospitalName: ['', Validators.required],
      branch: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.adminFormGroup = this.formBuilder.group({
      adminName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  submitForm() {
    const organizationDetails = this.organizationFormGroup.value;
    const adminDetails = this.adminFormGroup.value;

    const payload = {
      organization: organizationDetails,
      admin: adminDetails,
    };

    console.log('Submitting Form:', payload);

  }
}
