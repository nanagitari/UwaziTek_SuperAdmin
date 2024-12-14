import { Component } from '@angular/core';
import { AddUserComponent } from '../Users/add-user/add-user.component';
import { RegisterCustomerComponent } from '../Users/register-customer/register-customer.component';
import { PreRequestComponent } from '../pre-request/pre-request.component';
import { InsurancehomeComponent } from '../insurancehome/insurancehome.component';
import { RouterModule,Routes } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogoutDialogComponent } from '../../dialog box/logout-dialog/logout-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-insurance-dashboard',
  standalone: true,
  imports: [ RouterModule,CommonModule, AddUserComponent,
     RegisterCustomerComponent,PreRequestComponent,InsurancehomeComponent],
  templateUrl: './insurance-dashboard.component.html',
  styleUrl: './insurance-dashboard.component.css'
})
export class InsuranceDashboardComponent {
  isDropdownclicked= false;
  usertype: string='insurancehome';
  
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

