import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://52.22.245.63';
  private TOKEN_KEY = 'userToken';

  constructor(private http: HttpClient, private authservice:AuthService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.authservice.getToken(); 
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  addHospital(data: { hospitalbranch: string; hospitalname: string; hospitaladdress: string }): Observable<any> {
    const headers = this.getAuthHeaders();
    //({'Content-Type': 'application/json','Authorization': `Bearer ${token}`});

    return this.http.post<any>(`${this.apiUrl}/api/v1/admin/hospital`, data, { headers }).pipe(
      tap (response=>{
        const token = response.jwt;
        if (token) {
          this.authservice.saveToken(token);
        }
      })
    );
  }
  addInsurance(data: { address: string; contactPhoneNumber: string; insuranceName: string}): Observable<any>{
    const headers=this.getAuthHeaders();

    return this.http.post<any>(`${this.apiUrl}/api/v1/admin/insurance`, data , {headers}).pipe (
      tap (response=>{
        const token = response.jwt;
        if (token) {
          this.authservice.saveToken(token);
        }
      })
    )
  }

  getUsers(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any>(`${this.apiUrl}/api/v1/admin/users`);
  }

  updateUserStatus(id: any, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/v1/admin/users/${id}/status`, { status });
  }
}

