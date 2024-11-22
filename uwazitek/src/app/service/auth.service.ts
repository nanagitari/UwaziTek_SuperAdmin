import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://52.22.245.63'; 
  private TOKEN_KEY = 'authToken'; 
 //private REFRESH_TOKEN_KEY = 'refreshToken';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/api/v1/auth/login`, data, { headers }).pipe(
      tap(response => {
        const token = response.data.jwt;
        if (token) {
          this.saveToken(token); 
        }
      }),
      catchError(this.handleError)
    );
  }

  public saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  //private saveRefreshToken(token: string):void{
    //localStorage.setItem(this. REFRESH_TOKEN_KEY, token);
  //}

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
      Authorization: `Bearer ${token}`
    });
  }
  signup(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/api/v1/auth/signup`, data, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
  
    return throwError(() => new Error(error.message || 'Server error'));
  }
}


 

