import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule,FormBuilder,Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor (private formBuilder: FormBuilder){
    this.signupForm= this.formBuilder.group({
      fname : ['',Validators.required],
      Sname : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(8) ]],
      cpassword : ['',[Validators.required, Validators.minLength(8)]]

    });
  }
  onSubmit(){
    if (this.signupForm.valid){
      console.log ('Sign up form valid', this.signupForm.value);
      this.signupForm.reset()
    }
    else{
      console.log ('sign up is invalid');
    }
  }
  get fname(){
    return this.signupForm.get ('fname')
  }
  get Sname(){
    return this.signupForm.get ('Sname')
  }
  get email(){
    return this.signupForm.get ('email')
  }
  get password(){
    return this.signupForm.get ('password')
  }
  get cpassword(){
    return this.signupForm.get ('cpassword')
  }

}
