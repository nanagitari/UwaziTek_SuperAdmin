import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  approveUser(userId: any) {
    throw new Error('Method not implemented.');
  }
  denyUser(userId: any) {
    throw new Error('Method not implemented.');
  }
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

  fetchHospitalDetails(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/api/v1/admin/hospital`, {headers});
  }
  deleteHospital(_hospitalId: string): Observable<void> {
    const headers = this.getAuthHeaders();
   return this.http.delete<void>(`${this.apiUrl}/api/v1/admin/hospital/1`, {headers});
  }

  addHospital(data: { hospitalbranch: string; hospitalname: string; hospitaladdress: string }): Observable<any> {
    const headers = this.getAuthHeaders();
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

  fetchInsuranceDetails(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/api/v1/admin/insurance`, {headers});
  }
  deleteInsuranceDetails(_hospitalId: string): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.apiUrl}/api/v1/admin/insurance/1`, {headers});
   }
 
  fetchHospitalAdmins():Observable <any>{
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/api/v1/admin/hospitaladmins`, {headers});
    } 
  fetchInsuranceAdmins():Observable <any>{
    const headers= this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/api/v1/admin/insuranceadmins`, {headers});
  }  
  updateUserStatus(userId: number, payload: any) {
    const headers= this.getAuthHeaders();
    return this.http.patch(`${this.apiUrl}/api/v1/admin/hospitaladmin/1`, payload,{headers});
  }
  fetchActiveHospitalAdmins():Observable<any>{
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/api/v1/admin/hospitaladmins?is_verified=TRUE`, {headers});
  }
  fetchActiveInsuranceAdmins():Observable<any>{
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/api/v1/admin/insuranceadmins?is_verified=TRUE`, {headers})
  }
  
  

}


