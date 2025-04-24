import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../../../service/registration.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-customer',
  imports:[ReactiveFormsModule,],
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css'], 
})
export class RegisterCustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService) {
    this.customerForm = this.formBuilder.group({
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

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.customerForm.valid) {
      const userData = this.customerForm.value;
      this.registrationService.registerUser(userData).subscribe({
        next: (response) => {
          console.log('User registered successfully:', response);
          alert('User registration successful!');
          this.customerForm.reset(); 
        },
        error: (error) => {
          console.error('Error registering user:', error);
          alert('Failed to register user. Please try again.');
        },
      });
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}
