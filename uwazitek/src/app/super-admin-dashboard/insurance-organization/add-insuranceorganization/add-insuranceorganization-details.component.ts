import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-insuranceorganization-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-insuranceorganization-details.component.html',
  styleUrl: './add-insuranceorganization-details.component.css'
})
export class AddInsuranceorganizationDetailsComponent {
  insuranceForm: FormGroup;
  currentStep = 1;

  constructor(private formBuilder: FormBuilder) {
    this.insuranceForm = this.formBuilder.group({
      // Step 1: Hospital Details
      name: ['', Validators.required],
      email_address: ['', [Validators.required, Validators.email]],
      mobile_numberhospital: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      headquarter_location: ['', Validators.required],
    

      // Step 2: Hospital Admin Registration
  user_name: ['', Validators.required],
  first_name: ['', Validators.required],
  second_name: [''],
  last_name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  mobile_number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  national_id: ['', Validators.required],
  gender: ['', Validators.required],
  dob: ['', Validators.required],
    });
  }

  nextStep() {
    if (this.currentStep === 1) this.currentStep = 2;
  }

  previousStep() {
    if (this.currentStep === 2) this.currentStep = 1;
  }

  onSubmit() {
    if (this.insuranceForm.valid) {
      console.log('Form Submitted:', this.insuranceForm.value);
    }
  }

}
