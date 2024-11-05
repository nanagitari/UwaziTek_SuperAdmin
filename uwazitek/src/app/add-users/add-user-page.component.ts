import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { UserHospitalComponent } from './hospital/user-hospital.component';
import { UserInsuranceComponent } from './insurance/user-insurance.component';
import { CommonModule } from '@angular/common';
import { ViewUsersComponent } from "./view-users/view-users.component";
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-add-user-page',
  standalone: true,
  imports: [UserHospitalComponent, UserInsuranceComponent, CommonModule, ViewUsersComponent,MatTabsModule,RouterModule],
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
