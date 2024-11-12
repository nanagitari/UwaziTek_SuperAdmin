import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../service/user.service';


export interface Hospital {
  hospitalbranch: string;
  hospitalname: string;
  hospitaladdress: string;
}

@Component({
  selector: 'app-user-hospital',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './user-hospital.component.html',
  styleUrls: ['./user-hospital.component.css']
})
export class UserHospitalComponent implements OnInit {
  hospitalForm: FormGroup;
  AddSuccess: String = '';
  AddError: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  
    this.hospitalForm = this.formBuilder.group({
      hospitalbranch: ['', Validators.required],
      hospitalname: ['', Validators.required],
      hospitaladdress: ['', Validators.required]
    });
  }

    ngOnInit(): void {
     
    
  }

  onSubmit() {
    if (this.hospitalForm.valid) {
      const newHospital: Hospital = this.hospitalForm.value;
      this.userService.addHospital(newHospital).subscribe({
        next: (response) => {
          this.AddSuccess = 'Added hospital successfully';
          console.log('Hospital details added successfully:', response);
          this.router.navigate(['']); 
        },
        error: (error) => {
          this.AddError = 'Error, check the details';
          console.error('Error adding hospital', error);
        }
      });
    }
  }
}
