import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimReportsComponent } from "./claim-reports/claim-reports.component";
import { CurrentUsersComponent } from "./current-users/current-users.component";
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule, ClaimReportsComponent, CurrentUsersComponent,MatButtonModule,MatTabsModule,],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css'
})
export class ActivityComponent {

  constructor (private router: Router){}

}
