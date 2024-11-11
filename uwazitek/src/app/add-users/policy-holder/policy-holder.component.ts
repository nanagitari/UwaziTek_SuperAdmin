import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-policy-holder',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './policy-holder.component.html',
  styleUrl: './policy-holder.component.css'
})
export class PolicyHolderComponent {
  policyholderForm: FormGroup;


constructor (private formBuilder: FormBuilder){
    this.policyholderForm = this.formBuilder.group({
      policyholderid:['',Validators.required],
      policyholdername:['', Validators.required],
      insurancename:['',Validators.required],
    })
  }

onsubmit(){
  
}

}
