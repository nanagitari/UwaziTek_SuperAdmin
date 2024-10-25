import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'] 
})
export class ResetpasswordComponent {

  resetForm!: FormGroup;
  cpassword: any;
  password: any;
  email: any;

  constructor() {
  
    this.resetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', [Validators.required, Validators.minLength(5)]), 
      cpassword: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.resetForm.valid) {
      console.log('Form Submitted:', this.resetForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
