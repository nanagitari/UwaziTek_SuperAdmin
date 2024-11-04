import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserHospitalComponent } from './hospital/user-hospital.component';
import { UserInsuranceComponent } from './insurance/user-insurance.component';
import { CommonModule } from '@angular/common';
import { ViewUsersComponent } from "./view-users/view-users.component";

@Component({
  selector: 'app-add-user-page',
  standalone: true,
  imports: [UserHospitalComponent, UserInsuranceComponent, CommonModule, ViewUsersComponent],
  templateUrl: './add-user-page.component.html',
  styleUrl: './add-user-page.component.css'
})
export class AddUserPageComponent {
  usertype: string='';

  constructor (private router: Router){}
  
  onclick(usertype: string){
    this.usertype= usertype;

  }


}
