import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
//import { ReportService } from '../../../service/report.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl:'./home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit {
searchQuery: any;

filterUsers() {
throw new Error('Method not implemented.');
}
  public userName: string = ''; 
  public showContactInfo: boolean = false; 
  currentTime: string = '';
  contactinfo = [
    { email: 'uwazitek@gmail.com' },
    { phone: '+254712345678 / +2547895635' },
  ];

  
  
  showNotifications: boolean = false;
 
  constructor (private router: Router){}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') || 'SuperAdmin' ;
    this.updateTime();
    setInterval(() =>this.updateTime(),1000);
  }
 
  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications; 
  }
  
  updateTime():void{
    const now= new Date();
    this.currentTime= now.toLocaleTimeString('en-GB',{hour12:false});
  }
  toggleContactUs(): void {
    this.showContactInfo = !this.showContactInfo; 
  }

  onCardClick(route: string): void {
    this.router.navigate([route]);
  }
  getstatistics(){
    
  }
  getBadgeClass(OveralStatus: string): string {
    switch (OveralStatus) {
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
