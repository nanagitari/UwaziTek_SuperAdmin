import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '';  // Your backend URL

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}



@Component({
  selector: 'app-authservice',
  standalone: true,
  imports: [],
  templateUrl: './authservice.component.html',
  styleUrls: ['./authservice.component.css']
})
export class AuthserviceComponent {

}
