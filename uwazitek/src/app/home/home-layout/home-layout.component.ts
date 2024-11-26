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
  userName: string = ''; // Corrected declaration
  showContactInfo: boolean = false; // Initialize to false

  contactinfo = [
    { email: 'uwazitek@gmail.com' },
    { phone: '+254712345678 / +2547895635' },
  ];

  BellIcon = BellIcon; // Lucide Bell icon
  MailIcon = MailIcon; // Lucide Mail icon

  notificationCount: number = 4; // Example count
  showNotifications: boolean = false;
  notifications = [
    { message: 'New user registered' },
    { message: 'System maintenance scheduled' },
    { message: 'Password updated successfully' },
  ];

  statistics = [
    { title: 'Hospitals', count: 13, icon: 'local_hospital', color: 'primary' },
    { title: 'Insurance', count: 10, icon: 'security', color: 'accent' },
  ];
 const router: any;

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
