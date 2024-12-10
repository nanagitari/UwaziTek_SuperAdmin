//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../../auth.service';
//import { FormService } from '../../form.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pre-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pre-request.component.html',
  styleUrl: './pre-request.component.css'
})
export class PreRequestComponent implements OnInit {
  formData = {
    insurance_id: '',
    patientFullName: '',
    typeOfPatient: '',
    policy_number: ''
  };
  feedbackMessage: string | null = null;
  insurances: any[] | undefined;
  authService: any;
  formService: any;

  constructor() {}

  ngOnInit(): void {
    this.loadInsurances();
  }

  loadInsurances(): void {
    this.authService.getInsurance().subscribe(
      (data: any[]) => {
        this.insurances = data;
      },
      (error: any) => {
        console.error('Error fetching insurances', error);
      }
    );
  }

  onSubmit() {
    console.log('Selected Insurance ID:', this.formData.insurance_id);
  console.log('Form Data:', this.formData);
    const token = this.authService.getToken(); // Ensure this method returns a valid token or null.
    if (!token) {
      console.error('Authorization token is missing');
      this.feedbackMessage = 'Authorization token is missing';
      return; // Stop further processing if no token is available.
    }
  
    // Proceed with form submission if token is available
    this.formService.submitForm(this.formData, token).subscribe({
      next: (response: any) => {
        console.log('Form submitted successfully', response);
        this.feedbackMessage = 'Form submitted successfully';
        this.resetForm();
      },
      error: (error: any) => {
        console.error('Error submitting form:', error);
        this.feedbackMessage = 'Failed to send request';
      }
    });
  }
  
  resetForm(): void {
    this.formData = {
      insurance_id: '',
      patientFullName: '',
      typeOfPatient: '',
      policy_number: ''
    };
  }
}

