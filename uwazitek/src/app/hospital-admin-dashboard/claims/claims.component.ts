import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaimsService } from '../../service/claims.service';
import { ReactiveFormsModule } from '@angular/forms';




@Component({
    selector: 'app-claims',
    imports: [CommonModule,DragDropModule,FormsModule, ReactiveFormsModule],
    templateUrl: './claims.component.html',
    styleUrl: './claims.component.css'
})
export class ClaimsComponent implements OnInit {

selectedFile: File | null = null;
fileURL: SafeResourceUrl | null = null;
feedbackMessage: string | null = null;
invoiceService: any;
claimsForm: FormGroup;

constructor(private sanitizer: DomSanitizer, private formBuilder: FormBuilder, private claimsService: ClaimsService) {
  this.claimsForm = this.formBuilder.group({
      
  invoice_number: ['', Validators.required],
  insured_id: ['', Validators.required],
  treatment_id: ['', Validators.required],
  hospital_id: ['', Validators.required],
  claim_narration: ['', Validators.required],
  
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput?.files?.[0]) {
      this.selectedFile = fileInput.files[0];
      if (this.selectedFile.type === 'application/pdf') {
        this.fileURL = URL.createObjectURL(this.selectedFile);
      } else {
        this.fileURL = null;
        this.feedbackMessage = 'Only PDF files are supported for preview.';
      }
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.claimsForm.invalid) {
      this.feedbackMessage = 'Please fill in all required fields.';
      return;
    }

    if (!this.selectedFile) {
      this.feedbackMessage = 'Please upload an invoice file.';
      return;
    }

    const formData = new FormData();
    formData.append('invoice_number', this.claimsForm.value.invoice_number);
    formData.append('insured_id', this.claimsForm.value.insured_id);
    formData.append('treatment_id', this.claimsForm.value.treatment_id);
    formData.append('hospital_id', this.claimsForm.value.hospital_id);
    formData.append('claim_narration', this.claimsForm.value.claim_narration);
    formData.append('invoice_file', this.selectedFile);

    this.claimsService.submitClaim(formData).subscribe(
      (response: any) => {
        this.feedbackMessage = 'Claim submitted successfully!';
        this.claimsForm.reset();
        this.selectedFile = null;
        this.fileURL = null;
      },
      (error: any) => {
        this.feedbackMessage = 'An error occurred while submitting the claim. Please try again.';
        console.error(error);
      }
    );
  }
}