
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
  }
  








