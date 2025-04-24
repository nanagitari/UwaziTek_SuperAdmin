import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, tap,catchError } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
 
  private apiUrl = 'https://uwazi-api.onrender.com';
  private TOKEN_KEY = 'userToken';

  constructor(private http: HttpClient, private authservice:AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authservice.getToken(); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

 

  registerHospital(hospitalData: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post<any>(`${this.apiUrl}/api/v1/register/organisation`, hospitalData, { headers }).pipe(
      tap (response=>{
        const token = response.access_token;
        if (token) {
          this.authservice.saveToken(token);
        }
      })
    );
  }
  
  registerInsurance(insuranceData: any): Observable<any> {
   const headers = this.getAuthHeaders();
   return this.http.post<any>(`${this.apiUrl}/api/v1/register/organisation`, insuranceData, { headers }).pipe(
     tap (response=>{
       const token = response.access_token;
       if (token) {
         this.authservice.saveToken(token);
       }
     })
   );
 }
 registerUser(userData: any): Observable<any> {
  const headers = this.getAuthHeaders();
  return this.http.post<any>(`${this.apiUrl}/api/v1/register/user`, userData, { headers }).pipe(
    tap((response) => {
      const token = response.access_token;
      if (token) {
        this.authservice.saveToken(token); 
      }
    })
  );
}
getAllOrganisations(): Observable<any> {
  const headers = this.getAuthHeaders();
  return this.http.get<any[]>(`${this.apiUrl}/api/v1/pre-login`, { headers }).pipe(

    map((response: any[]) => response || []),
    catchError(error => {
      console.error('Error fetching organisations', error);
      return [];
    })
  );
}



}

  

