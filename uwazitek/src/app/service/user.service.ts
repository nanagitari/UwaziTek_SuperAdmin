
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://your-api-url/api/users'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  updateUserStatus(userId: number, status: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${userId}`, { status });
  }
}
