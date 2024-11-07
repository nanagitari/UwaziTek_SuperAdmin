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
claimReports: any;
sendToInsurance(_t14: any) {
throw new Error('Method not implemented.');
}

}
