import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { AuthService } from '../auth.service';
  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup; 
  loginError: string = '';
  loginSuccess: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService , private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(5)]]  
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.loginSuccess = 'Login successful!';
          console.log('Login success:', response);
         this.router.navigate(['/admin-dashboard'])
        },
        error: (error) => {
          this.loginError = 'Login failed. Please check your credentials.';
          console.log ('Login failed:', error);
        },
      });
    }
  }

  
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}


