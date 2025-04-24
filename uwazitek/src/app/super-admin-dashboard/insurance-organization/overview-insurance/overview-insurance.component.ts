import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../../../service/registration.service';

@Component({
    selector: 'app-overview-insurance',
    imports: [CommonModule],
    templateUrl: './overview-insurance.component.html',
    styleUrl: './overview-insurance.component.css'
})
export class OverviewInsuranceComponent implements OnInit {
    insuranceData: Array<any> = [];

constructor(private registrationService: RegistrationService){}

ngOnInit(): void {
    this.fetchInsuranceData();
  }

  fetchInsuranceData(): void {
    this.registrationService.getAllOrganisations().subscribe(
      (response) => {
        console.log('insurance data:', response); 
        this.insuranceData = response.organisations || []; 
      },
      (error) => {
        console.error('Error fetching hospital data', error);
      }
    );
  }
  
}
