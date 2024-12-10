import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HospitalhomeComponent } from '../../hospitalhome/hospitalhome.component';
import { MatDialog } from '@angular/material/dialog';
import { HospitalUserComponent } from '../../hospital-user/hospital-user.component';
import { SendRequestComponent } from '../../send-request/send-request.component';
import { OverviewRequestComponent } from '../../overview-request/overview-request.component';
import { UploadInvoiceComponent } from "../../upload-invoice/upload-invoice.component";
import { OverviewClaimsComponent } from "../../overview-claims/overview-claims.component";
import { LogoutDialogComponent } from '../../dialog box/logout-dialog/logout-dialog.component';



@Component({
  selector: 'app-hospitalDashboard',
  standalone: true,
  imports: [RouterModule, CommonModule, HospitalhomeComponent,
    HospitalUserComponent, SendRequestComponent, OverviewRequestComponent,
     UploadInvoiceComponent, OverviewClaimsComponent,LogoutDialogComponent],
  templateUrl: './hospitalDashboard.component.html',
  styleUrls: ['./hospitalDashboard.component.css'] 
})
export class HospitalDashboardComponent  {
  isDropdownclicked= false;
  usertype: string='hospitalhome';
  
  activeTab: string= '';
activeDropdown: string | null = null;

  
  constructor(private router: Router,public dialog: MatDialog) {}
  handleIconClick(){
    console.log('icon clicked');
  }
  toggleDropdown(dropdown: string): void {
    this.activeDropdown= this.activeDropdown === dropdown? null: dropdown;
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
