import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../../service/user.service';


export interface Hospital {
  hospitalBranch: string;
  hospitalName: string;
  address: string;
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

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  
    this.hospitalForm = this.formBuilder.group({
      hospitalBranch: ['', Validators.required],
      hospitalName: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.hospitalForm.valid) {
      const newHospital: Hospital = this.hospitalForm.value;
      this.userService.addHospital(newHospital).subscribe({
        next: (response: any) => {
          console.log('Hospital details added successfully', response);
          
          this.router.navigate(['/some-path']); 
        },
        error: (error: any) => {
          console.error('Error adding hospital', error);
        }
      });
    }
  }
}
