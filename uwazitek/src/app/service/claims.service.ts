import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  private apiUrl = 'https://uwazi-api.onrender.com';
  private TOKEN_KEY = 'userToken';

  constructor(private http:HttpClient, private authservice:AuthService) {}

   private getAuthHeaders(): HttpHeaders {
    const token = this.authservice.getToken(); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  sendPrerequest(RequestData: any, any: any): Observable<any> {
   const headers = this.getAuthHeaders();
   return this.http.post<any>(`${this.apiUrl}/api/v1/insurance/pre-auth`, RequestData, { headers }).pipe(
     tap (response=>{
       const token = response.access_token;
       if (token) {
         this.authservice.saveToken(token);
       }
     })
   );
 }
 submitClaim(FormData: FormData): Observable<any> {
   const headers = this.getAuthHeaders();
   return this.http.post<any>(`${this.apiUrl}/api/v1/insurance/claims`, FormData, { headers }).pipe(
     tap (response=>{
       const token = response.access_token;
       if (token) {
         this.authservice.saveToken(token);
       }
     })
   );
 }




}
