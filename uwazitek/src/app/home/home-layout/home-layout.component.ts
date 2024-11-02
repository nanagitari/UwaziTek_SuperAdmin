import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule,BellIcon } from 'lucide-angular';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [CommonModule, RouterModule,LucideAngularModule],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {
BellIcon=BellIcon;
notificationCount = 3; // Example count
showNotifications = false;
  notifications = [
    { message: 'New user registered' },
    { message: 'System maintenance scheduled' },
    { message: 'Password updated successfully' },
  ];

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }
}