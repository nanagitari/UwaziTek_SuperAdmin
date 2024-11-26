import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-current-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./current-users.component.html',
  styleUrls: ['./current-users.component.css'],
})
export class CurrentUsersComponent implements OnInit{
currentUsers: any;
activeUsers: any;
users: any[]=[];
isloading: boolean= false;

constructor (private userService: UserService){}

ngOnInit(): void {
  this.fetchAllActiveUser();
  
}
fetchAllActiveUser():void{
  this.isloading= true;


forkJoin({
    hospitalActiveAdmins: this.userService.fetchActiveHospitalAdmins(),
    insuranceActiveAdmins: this.userService.fetchActiveInsuranceAdmins(),
  }).subscribe(
    ({ hospitalActiveAdmins, insuranceActiveAdmins }) => {
      const hospitalArray = Array.isArray(hospitalActiveAdmins.data) ? hospitalActiveAdmins.data : [];
      const insuranceArray = Array.isArray(insuranceActiveAdmins.data) ? insuranceActiveAdmins.data : [];

      this.users = [
        ...hospitalArray.map((admin: any) => ({
          id: admin.hospitalAdminid,
          email: admin.user.email,
          first_name: admin.user.first_name,
          last_name: admin.user.last_name,
          role: 'Hospital Admin',
          status: 'Verified',
          companyname: admin.hospitalName,
        })),
        ...insuranceArray.map((admin: any) => ({
          id: admin.insuranceAdminid,
          email: admin.user.email,
          first_name: admin.user.first_name,
          last_name: admin.user.last_name,
          role: 'Insurance Admin',
          status: 'Verified',
          companyname: admin.insurance_name,
        })),
      ];

      this.isloading = false;
    },
    (error) => {
      console.error('Error fetching users:', error);
      this.isloading = false;
    }
  );
}

}

