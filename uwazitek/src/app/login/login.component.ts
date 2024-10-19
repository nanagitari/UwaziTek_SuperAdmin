import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators} from '@angular/forms';
// import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule,SignupComponent],
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input ()user: any;
  
  submitted: boolean= false;

}

