import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { UserService } from '../../service/user.service';

export interface Insurance {
  address: string;
  contact_phone_number: string;
  insurance_name: string;
}

@Component({
  selector: 'app-user-insurance',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './user-insurance.component.html',
  styleUrl: './user-insurance.component.css'
})
export class UserInsuranceComponent implements OnInit{
insuranceForm: FormGroup;
AddSuccess: String = '';
AddError: String = '';

  constructor (private formBuilder: FormBuilder, private userService : UserService, private router: Router){
    this.insuranceForm = this.formBuilder.group({
      insurance_name:['',Validators.required],
      address:['', Validators.required],
      contact_phone_number:['',Validators.required],
    })
  }

  ngOnInit(): void {
     
    
  }

  onSubmit() {
    if (this.insuranceForm.valid) {
      const newInsurance: Insurance = this.insuranceForm.value;
      this.userService.addInsurance(this.insuranceForm.value).subscribe({
        next: (response) => {
          this.AddSuccess = 'Added insurance successfully';
          console.log('insurance details added successfully:', response);
          this.router.navigate(['admin-dashboard/insurance']); 
        },
        error: (error) => {
          this.AddError = 'Error, check the details';
          console.error('Error adding hospital', error);
        }
      });
    }
    
  }
}

