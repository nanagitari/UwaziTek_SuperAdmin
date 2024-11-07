import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ReportService } from '../../service/report.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-security-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './security-settings.component.html',
  styleUrl: './security-settings.component.css'
})

export class SecuritySettingsComponent implements OnInit {
  reports: any[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit() {
    this.fetchReports();
  }

  fetchReports() {
    this.reportService.getReports().subscribe((data: any[]) => {
      this.reports = data;
    });
  }

  onVisibilityChange(report: any) {
    this.reportService.updateReportVisibility(report.id, report.visibility).subscribe((response: any) => {
      console.log('Visibility updated:', response);
    });
  }
}


