
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://52.22.245.63'; // Backend API URL

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post<{data:{ jwt: string }}>(`${this.apiUrl}/api/v1/auth/login`, data)
      .pipe(
        tap(response => {
          // Save the token in localStorage or sessionStorage
          localStorage.setItem('authToken', response?.data.jwt);
        })
      );
  }

  // Optional: method to retrieve token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Optional: method to remove token (e.g., logout)
  logout(): void {
    localStorage.removeItem('authToken');
  }
}






