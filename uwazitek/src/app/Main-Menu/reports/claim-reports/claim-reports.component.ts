import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-claim-reports',
    imports: [CommonModule],
    templateUrl: './claim-reports.component.html',
    styleUrl: './claim-reports.component.css'
})
export class ClaimReportsComponent implements OnInit {
  fraudDetectionResults: any[] = [];
  metadata: any = {};
  overallStatus: string | null = null;

constructor (private http: HttpClient){}


ngOnInit(): void {
  this.getFraudDetectionReport();
}
getFraudDetectionReport(): void {
  const apiUrl = 'https://uwazitek.onrender.com/generate-report';

  this.http.get<any>(apiUrl).subscribe({
    next: (response) => {
      this.fraudDetectionResults = response['Fraud Detection Results'];
      this.metadata = response['Metadata'];
      this.overallStatus = this.extractOverallStatus();
    },
    //console.log(response);
    error: (error) => {
      console.error('Error fetching fraud detection data:', error);
    },
  });
}

extractOverallStatus(): string | null {
  const overallStatusEntry = this.fraudDetectionResults.find(
    (result) => result.Description === 'Overall Status'
  );
  return overallStatusEntry ? overallStatusEntry['Fraud Category'] : null;
}

getFraudCategoryClass(status: string): string {
  switch (status) {
    case 'Fraud':
      return 'badge-red';
    case 'Approvable':
      return 'badge-green';
    case 'Risky':
      return 'badge-orange';
    default:
      return 'badge-default';
  }
}





























claimReports = [
  {
    claimId: 'CR12345',
    claimantName: 'John Doe',
    claimDate: '2024-10-10',
    claimStatus: 'Risky',
    insuranceName: 'ABC Insurance',
    claimAmount: 5000,
    hospitalName: 'General Hospital',
  },
  {
    claimId: 'CR12346',
    claimantName: 'Jane Smith',
    claimDate: '2024-10-12',
    claimStatus: 'Fraud',
    insuranceName: 'XYZ Insurance',
    claimAmount: 2500,
    hospitalName: 'City Health Center',
  },
  {
    claimId: 'CR12347',
    claimantName: 'Emily White',
    claimDate: '2024-10-15',
    claimStatus: 'Approvable',
    insuranceName: 'Global Assurance',
    claimAmount: 10000,
    hospitalName: 'National Medical',
  },
];












}
