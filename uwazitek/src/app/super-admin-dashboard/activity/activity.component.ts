import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimReportsComponent } from '../../Main-Menu/reports/claim-reports/claim-reports.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-activity',
    imports: [CommonModule, ClaimReportsComponent, MatButtonModule, MatTabsModule],
    templateUrl: './activity.component.html',
    styleUrl: './activity.component.css'
})
export class ActivityComponent {

  constructor (private router: Router){}

}
