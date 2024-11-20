import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-verification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-verification.component.html',
  styleUrls: ['./user-verification.component.css'], // Fixed typo from `styleUrl` to `styleUrls`
})
export class UserVerificationComponent implements OnInit {
denyUser(arg0: any) {
throw new Error('Method not implemented.');
}
approveUser(arg0: any) {
throw new Error('Method not implemented.');
}
  insuranceUserDetails: any[] = [];
  hospitalUserDetails: any[] = [];
  users: any[] = [];
  isLoading: boolean = false; // Proper boolean initialization

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  // Unified function to fetch users
  fetchAllUsers(): void {
    this.isLoading = true; // Start loading spinner

    forkJoin({
      hospitalAdmins: this.userService.fetchHospitalUser(),
      insuranceAdmins: this.userService.fetchInsuranceUser(),
    }).subscribe(
      ({ hospitalAdmins, insuranceAdmins }) => {
        // Combine and normalize data
        this.users = [
          ...hospitalAdmins.data.map((user: any) => ({
            ...user,
            role: 'Hospital Admin',
          })),
          ...insuranceAdmins.data.map((user: any) => ({
            ...user,
            role: 'Insurance Admin',
          })),
        ];
        this.isLoading = false; // Stop loading spinner
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.isLoading = false; // Stop loading spinner even on error
      }
    );
  }

  // Approve user functionality
  
  // Deny user functionality

  // Fetch insurance user details (not needed here but kept for standalone calls)
  getInsuranceUser(): void {
    this.userService.fetchInsuranceUser().subscribe({
      next: (data) => {
        this.insuranceUserDetails = data.data;
        console.log(this.insuranceUserDetails);
      },
      error: (error) => {
        console.error('Error fetching insurance user details:', error);
      },
    });
  }
  // Fetch hospital user details (not needed here but kept for standalone calls)
  getHospitalUser(): void {
    this.userService.fetchHospitalUser().subscribe({
      next: (data) => {
        this.hospitalUserDetails = data.data;
        console.log(this.hospitalUserDetails);
      },
      error: (error) => {
        console.error('Error fetching hospital user details:', error);
      },
    });
  }
}
