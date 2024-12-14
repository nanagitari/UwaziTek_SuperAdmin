import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, 
    RouterModule, 
    HttpClientModule, 
    FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;
  loginSuccess: string | null = null;

  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router: Router) {
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
     
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  onLogin(): void {
    if (this.loginForm.valid) {
      const loginData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };

      console.log('Login Data:', loginData); 

      this.authService.login(loginData).subscribe({
        next: (response) => {
           const token = response;
              if (token) {
               localStorage.setItem('authToken', token);
                 this.loginSuccess = 'Login successful!';
                 this.loginError = null;
         } else {
            this.loginError = 'Login failed. Token not received.';
            this.loginSuccess = null;
          }
        },
        error: (err) => {
          console.error('Login error:', err); 
          this.loginError = err.error?.message || 'Login failed. Please try again.';
          this.loginSuccess = null;
        },
    });
    } else {
      this.loginError = 'Please fill in all required fields.';
       this.loginSuccess = null;
  }
}
        }
      
