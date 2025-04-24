import { Component, OnInit } from '@angular/core';
import { ClaimsService } from '../../service/claims.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-pre-request',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './pre-request.component.html',
    styleUrl: './pre-request.component.css'
})
export class PreRequestComponent implements OnInit {
  formData = {
    customer_id: ''
  };
  feedbackMessage: string | null = null;
  mappedData: any[] = [];
  // requestForm: FormGroup;

  constructor(private claimsService: ClaimsService, private authService:AuthService,private formBuilder: FormBuilder) {
  // this.requestForm = this.formBuilder.group({
      
  //   customer_id: ['', Validators.required],
  //     });
    }
  ngOnInit(): void {}

  onSubmit() {
  console.log('Form Data:', this.formData);
    const token = this.authService.getToken(); 
    if (!token) {
      console.error('Authorization token is missing');
      this.feedbackMessage = 'Authorization token is missing';
      return; 
    }
  
    
    this.claimsService.sendPrerequest(this.formData,this.formData).subscribe({
      next: (response: any) => {
        console.log('Form submitted successfully', response);


        this.feedbackMessage = 'Form submitted successfully';
        this.mappedData = this.mapResponseData(response);
        this.resetForm();
      },
      error: (error: any) => {
        console.error('Error submitting form:', error);
        this.feedbackMessage = 'Failed to send request';
      }
    });
  }
  
  resetForm(): void {
    //this.formData = {
      //customer_id: ''

    };
  
  mapResponseData(response: any): any[] {
  
    return response.data.map((item: any) => ({
      id: item.id,
      description: item.description,
      status: item.status,
      date: item.date,
    }));
}
}
