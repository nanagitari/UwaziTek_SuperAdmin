import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-user-hospital',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-hospital.component.html',
  styleUrls: ['./user-hospital.component.css']
})
export class UserHospitalComponent {
  hospitalForm: FormGroup;
  fb: any;

  constructor(private formBuilder: FormBuilder){
    this.hospitalForm = this.fb.group({
      hospitalBranch:['', Validators.required],
      hospitalName: ['', Validators.required],
      address: ['', Validators.required],
      
  })


}}
