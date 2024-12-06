import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-claim-reports',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './claim-reports.component.html',
  styleUrl: './claim-reports.component.css'
})
export class ClaimReportsComponent {




getBadgeClass(status: string): string {
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
