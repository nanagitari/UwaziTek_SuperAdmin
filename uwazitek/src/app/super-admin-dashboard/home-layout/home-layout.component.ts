import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
//import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit {
  searchQuery: string = '';
  public userName: string = 'SuperAdmin';  
  currentTime: string = '';
  showNotifications: boolean = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
   
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications; 
  }
  
  updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-GB', { hour12: false });
  }

  filterUsers(): void {
    console.log('Filter functionality goes here.');
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
