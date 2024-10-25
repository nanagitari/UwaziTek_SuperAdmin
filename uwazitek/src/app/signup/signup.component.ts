import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule,FormBuilder,Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  signupinError: string= '';
  signupinSuccess: string= '';

  constructor (private formBuilder: FormBuilder, private authservice: AuthService, private router: Router ){
    this.signupForm= this.formBuilder.group({
      first_name : ['',Validators.required],
      last_name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8) ]],
      

    });
  }
  onSubmit(){
    if (this.signupForm.valid){
      console.log("FORM",this.signupForm.value)
      this.authservice.signup(this.signupForm.value).subscribe({
        next: (response)=> {
          this.signupinSuccess= 'Sign up Successfull.';
          console.log ('Sign up success:', response);
          this.router.navigate(['/login'])
          },

        error: (error)=> {
          this.signupinError= 'fill in the required details.';
          console.log ('sign up failed:', error);
        }
      });
    }}  
  get first_name(){
    return this.signupForm.get ('first_name')
  }
  get last_name(){
    return this.signupForm.get ('last_name')
  }
  get email(){
    return this.signupForm.get ('email')
  }
  get password(){
    return this.signupForm.get ('password')
  }
 
}
