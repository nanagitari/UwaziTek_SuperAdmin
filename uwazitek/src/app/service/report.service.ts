
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = 'http://your-api-url/api/reports';
  private pdfUrl = '';

  constructor(private http: HttpClient) {}

  getReports(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  updateReportVisibility(reportId: number, visibility: boolean): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${reportId}`, { visibility });
  }

    fetchPdf() {
      return this.http.get(this.pdfUrl, {
        responseType: 'blob', // Fetch as binary blob
      });
    }
    getstatistics (){ [
      { title: 'Total Hospitals', count: 13, icon: 'local_hospital', color: 'primary', route: '/view-users' },
      { title: 'Total Insurances', count: 10, icon: 'security', color: 'accent', route: '/view-users' },
      {title: 'Total ClaimReports', count: 3, icon: 'report', color:'primary', route:'./activity'},
    ];
  }
}
  








