import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl:string = 'https://1a14-102-213-49-36.ngrok-free.app';
  private TOKEN_KEY = 'authToken'; 
 

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string; role:string; }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<any>(`${this.apiUrl}/api/v1/auth/login`, data, { headers })
      .pipe(
        tap((response) => {
          if (response.token) {
            this.saveToken(response.token);
          } else {
            throw new Error('Authentication failed');
          }
        }),
        catchError(this.handleError)
      );
  }
  public saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
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
      Authorization: `Bearer ${token}`
    });
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Client-side error:', error.error.message);
    } else {

      console.error(`Server-side error: Code ${error.status}, `, error.message);
    }

    return throwError(() => new Error('Failed to log in. Please try again later.'));
  }
}



 

