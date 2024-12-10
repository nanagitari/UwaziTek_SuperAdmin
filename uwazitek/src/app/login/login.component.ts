import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClientModule } from '@angular/common/http';
  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, 
    HttpClientModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup; 
  loginError: string |null=null;
  loginSuccess: string | null = null;
  loginData: { email: string; password: string; role: string } = {
    email: '',
    password: '',
    role: '', 
  };

  constructor(private formBuilder: FormBuilder, private authService: AuthService , private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(5)]]  
    });
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  get role(){
    return this.loginForm.get('role');
  }
  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password,role } = this.loginForm.value;

      this.authService.login({email, password,role }).subscribe({
        next: (response) => {
          const { token } = response;
          localStorage.setItem('authToken', token);

          this.loginSuccess = 'Login successful!';
          this.loginError = null;

          // Redirect based on role
          switch (role) {
            case 'super_admin':
              this.router.navigate(['/admin-dashboard']);
              break;
            case 'hospital_admin':
              this.router.navigate(['/hospitaldashboard']);
              break;
            case 'insurance_admin':
              this.router.navigate(['/insurance-admin-dashboard']);
              break;
            default:
              this.loginError = 'Invalid user role';
              this.loginSuccess = null;
              break;
          }
        },
        error: (err) => {
          this.loginError = err.error.message || 'Login failed';
          this.loginSuccess = null;
        },
      });
    }
  }

}