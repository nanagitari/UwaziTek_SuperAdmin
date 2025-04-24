import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../../../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview-hospital',
  imports: [CommonModule],
  templateUrl: './overview-hospital.component.html',
  styleUrls: ['./overview-hospital.component.css'], 
})
export class OverviewHospitalComponent implements OnInit {

  hospitalData: Array<any> = [];

  constructor(private registrationService: RegistrationService, private router: Router) {}

  ngOnInit(): void {
    this.fetchHospitalData();
  }

  fetchHospitalData(): void {

    this.registrationService.getAllOrganisations().subscribe(
      (response) => {
         
        console.log('Hospital data:', response);
        this.hospitalData= response.organisations || [];
      },
      (error) => {
        console.error('Error fetching hospital data', error);
      }
    );
  }
  navigateToAddHospital() {
    this.router.navigate(['/addhospitalorganization']);
    }
}

    