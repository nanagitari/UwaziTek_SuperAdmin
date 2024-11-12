import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Hospital } from '../add-users/hospital/user-hospital.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://52.22.245.63';
  private TOKEN_KEY = 'userToken';

  constructor(private http: HttpClient) {}

  addHospital(data: { hospitalbranch: string; hospitalname: string; hospitaladdress: string }): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    });

    return this.http.post<any>(`${this.apiUrl}/api/v1/admin/hospital`, data, { headers }).pipe(
      tap((response: { token: any }) => {
        const token = response.token;
        if (token) {
          this.storeToken(token);
        }
      })
    );
  }

  private storeToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/admin/users`);
  }

  updateUserStatus(id: any, status: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/v1/admin/users/${id}/status`, { status });
  }
}

