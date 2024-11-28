import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
import { LucideAngularModule, BellIcon, MailIcon } from 'lucide-angular';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, MatCardModule, MatIconModule],
  templateUrl:'./home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit {
  public userName: string = ''; 
  public showContactInfo: boolean = false; 

  contactinfo = [
    { email: 'uwazitek@gmail.com' },
    { phone: '+254712345678 / +2547895635' },
  ];

  BellIcon = BellIcon; 
  MailIcon = MailIcon;

  
  showNotifications: boolean = false;
  notifications = [
    { message: 'New user registered' },
    { message: 'System maintenance scheduled' },
    { message: 'Password updated successfully' },
  ];

  statistics = [
    { title: 'Hospitals', count: 13, icon: 'local_hospital', color: 'primary', route: '/view-users' },
    { title: 'Insurance', count: 10, icon: 'security', color: 'accent', route: '/view-users' },
  ];
notificationCount: any;
  constructor (public router: Router){}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') || 'Super Admin';
  }

  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications; // Correct toggle logic
  }

  toggleContactUs(): void {
    this.showContactInfo = !this.showContactInfo; // Correct toggle logic
  }

  onCardClick(route: string): void {
    this.router.navigate([route]);
  }
  
}
