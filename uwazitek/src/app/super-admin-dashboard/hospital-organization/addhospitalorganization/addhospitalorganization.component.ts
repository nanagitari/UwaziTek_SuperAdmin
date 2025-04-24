import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from '../../../service/registration.service';

@Component({
    selector: 'app-addhospitalorganization',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './addhospitalorganization.component.html',
    styleUrl: './addhospitalorganization.component.css'
})
export class AddhospitalorganizationComponent  {
  hospitalForm: FormGroup;
  currentStep = 1;


  constructor(private formBuilder: FormBuilder , private registrationservice:RegistrationService) {
 this.hospitalForm = this.formBuilder.group({
      // Step 1: Hospital Details
  type: ['hospital', Validators.required],
  name: ['', Validators.required],
  email_address: ['', [Validators.required, Validators.email]],
  mobile_number_hospital: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
  head_quarter_location: ['', Validators.required],
  hospital_category: ['', Validators.required],
  kra_pin:['',Validators.required],

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
    if (this.currentStep === 1 && this.hospitalForm.valid) {
      const hospitalData = this.hospitalForm.value;

      console.log (Response);
      this.registrationservice.registerHospital(hospitalData).subscribe({
        next: (response) => {
          console.log('Organisation registered successfully:', response);
        },
        error: (err) => {
          console.error('Error registering organisation:', err);
        },
      });
    }
    this.currentStep = 2
  }
  onSubmit(){
    if (this.currentStep === 2 && this.hospitalForm.valid) {
      const userData = this.hospitalForm.value;

      console.log ('AdminData:', userData);
      this.registrationservice.registerUser(userData).subscribe({
        next: (response) => {
          console.log('Admin registered successfully:', response);
          alert('Registration completed successfully!');
        },
        error: (err) => {
          console.error('Error registering admin:', err);
        },
      });
    }
  }
  

  previousStep() {
    if (this.currentStep === 2) this.currentStep = 1;
  }

 
}
