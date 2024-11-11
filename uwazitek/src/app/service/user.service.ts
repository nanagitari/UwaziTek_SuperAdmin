
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hospital } from '../add-users/hospital/user-hospital.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://your-api-url.com/hospita';

  constructor(private http: HttpClient) {}

  addHospital(hospital: Hospital): Observable<any> {
    return this.http.post<any>(this.apiUrl, hospital);
  }
}
