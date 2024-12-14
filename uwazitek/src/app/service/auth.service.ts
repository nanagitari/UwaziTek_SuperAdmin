import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = 'https://uwazi-api-3.onrender.com';
  private TOKEN_KEY = 'authToken';

  constructor(private http: HttpClient) {}

  
  login(data: { email: string; password: string; }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    console.log('Login Payload:', data); 
  
    return this.http.post<any>(`${this.apiUrl}/api/v1/auth/login`, data, { headers }).pipe(
      tap((response) => {
        console.log('API Response:', response); 
        if (response.access_token) {
          this.saveToken(response.access_token);
        } else {
          throw new Error('Authentication failed');
        }
      }),
      catchError(this.handleError)
    );
  }
  

  public saveToken(access_token: string): void {
    localStorage.setItem(this.TOKEN_KEY, access_token);
  }

  
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  
  public getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
  
    if (error.error instanceof ErrorEvent) {
      
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      
      if (error.error && error.error.message) {
        errorMessage = `Server error: ${error.error.message}`;
      } else {
        errorMessage = `Server error: Code ${error.status}, Message: ${error.message || 'No message available'}`;
      }
    }
  
    console.error('Error Details:', error);
    return throwError(() => new Error(errorMessage));
  }
  
  
  }





 

