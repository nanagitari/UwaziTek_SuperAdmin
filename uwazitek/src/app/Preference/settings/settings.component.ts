import { Component } from '@angular/core';
//import { SecuritySettingsComponent } from './security-settings/security-settings.component';
//import { UserManagementComponent } from './user-management/user-management.component';
//import { SystemPreferenceComponent } from './system-preference/system-preference.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  constructor (private router: Router){}
  

}

