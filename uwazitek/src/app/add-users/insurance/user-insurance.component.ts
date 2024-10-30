import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-user-insurance',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-insurance.component.html',
  styleUrl: './user-insurance.component.css'
})
export class UserInsuranceComponent {

}
