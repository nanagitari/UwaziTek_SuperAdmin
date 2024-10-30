import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHospitalComponent } from './hospital/user-hospital.component';
import { UserInsuranceComponent } from './insurance/user-insurance.component';
import { AddUserPageComponent } from './add-user-page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserHospitalComponent,
    UserInsuranceComponent,
    AddUserPageComponent
  ]
})
export class AddUsersModule { }
