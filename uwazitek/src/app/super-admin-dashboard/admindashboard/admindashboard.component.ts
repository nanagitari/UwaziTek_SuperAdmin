import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { AddhospitalorganizationComponent } from '../hospital-organization/addhospitalorganization/addhospitalorganization.component';
import { AddInsuranceorganizationDetailsComponent } from '../insurance-organization/add-insuranceorganization/add-insuranceorganization-details.component';
import { OverviewHospitalComponent } from '../hospital-organization/overview-hospital/overview-hospital.component';
import { OverviewInsuranceComponent} from '../insurance-organization/overview-insurance/overview-insurance.component';
import { ActivityComponent } from '../activity/activity.component';
import { LogoutDialogComponent } from '../../dialog box/logout-dialog/logout-dialog.component';
import { SettingsComponent } from '../../Preference/settings/settings.component';
import { HelpcenterComponent } from '../../Preference/helpcenter/helpcenter.component';
import { ProfileComponent } from '../../Preference/profile/profile.component';


@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [CommonModule, RouterModule,
    HomeLayoutComponent,AddhospitalorganizationComponent,
    AddInsuranceorganizationDetailsComponent,OverviewHospitalComponent,
    OverviewInsuranceComponent,ActivityComponent,
    LogoutDialogComponent,SettingsComponent,
  HelpcenterComponent,ProfileComponent],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

  isDropdownclicked= false;
  usertype: string='home-layout';
  
  activeTab: string= '';
activeDropdown: string | null = null;


constructor (private router: Router,public dialog: MatDialog){}


handleIconClick(){
  console.log('icon clicked');
}
toggleDropdown(dropdown: string): void {
  if (this.activeDropdown === dropdown) {
  
    this.activeDropdown = '';
  } else {
    
    this.activeDropdown = dropdown;

    if (dropdown === 'hospital-organization') {
      this.usertype = 'overview-hospital'; 
    } else if (dropdown === 'insurance-organization') {
      this.usertype = 'overview-insurance'; 
    }
  }
}

onclick(usertype: string){
this.usertype=usertype;
}

addActive(tab: string){
this.activeTab = tab;
}

openLogoutDialog(): void {
const dialogRef = this.dialog.open(LogoutDialogComponent);

dialogRef.afterClosed().subscribe((result: any) => {
  if (result) {
    
    console.log('User confirmed logout');
  } else {
    console.log('User cancelled logout');
  }
});
}

}
