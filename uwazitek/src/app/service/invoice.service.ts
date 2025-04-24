import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap,catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl = 'https://uwazitek.onrender.com';


  constructor(private http:HttpClient) { }

  private getHeaders(): HttpHeaders {
    //const token = this.authservice.getToken(); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer `
    });
  }


  getFraudDetectionReport(): void {
   
  }
}
