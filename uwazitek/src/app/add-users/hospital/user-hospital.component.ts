import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-user-hospital',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, 
    RouterModule],
  templateUrl: './user-hospital.component.html',
  styleUrls: ['./user-hospital.component.css']
})
export class UserHospitalComponent {
  hospitalForm: FormGroup;
  fb: any;

  constructor(private formBuilder: FormBuilder){
    this.hospitalForm = this.formBuilder.group({
      hospitalBranch:['', Validators.required],
      hospitalName: ['', Validators.required],
      address: ['', Validators.required],
      
  })


}}
