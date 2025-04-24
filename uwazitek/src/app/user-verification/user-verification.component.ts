import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';
import { forkJoin } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-verification',
    imports: [CommonModule, FormsModule],
    templateUrl: './user-verification.component.html',
    styleUrls: ['./user-verification.component.css']
})
export class UserVerificationComponent implements OnInit {
  users: any[] = []; // All users fetched from backend
  filteredUsers: any[] = []; // Filtered users based on search
  paginatedUsers: any[] = []; // Users for the current page

  isLoading: boolean = false;
  searchQuery: string = '';
  recordsPerPage = 8;
  currentPage = 1;
  totalPages = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  fetchAllUsers(): void {
    this.isLoading = true;

    forkJoin({
      hospitalAdmins: this.userService.fetchHospitalAdmins(),
      insuranceAdmins: this.userService.fetchInsuranceAdmins(),
    }).subscribe(
      ({ hospitalAdmins, insuranceAdmins }) => {
        const hospitalArray = Array.isArray(hospitalAdmins.data)
          ? hospitalAdmins.data
          : [];
        const insuranceArray = Array.isArray(insuranceAdmins.data)
          ? insuranceAdmins.data
          : [];
        console.log('Hospital Admins:', hospitalAdmins);
        console.log('Insurance Admins:', insuranceAdmins);

        this.users = [
          ...hospitalArray.map((admin: any) => ({
            id: admin.hospitalAdminid,
            email: admin.user.email,
            first_name: admin.user.first_name,
            last_name: admin.user.last_name,
            role: 'Hospital Admin',
            status: admin.hospitalAdminsstatus || 'Pending',
          })),
          ...insuranceArray.map((admin: any) => ({
            id: admin.insuranceadminid,
            email: admin.user.email,
            first_name: admin.user.first_name,
            last_name: admin.user.last_name,
            role: 'Insurance Admin',
            status: admin.insuranceAdminstatus || 'Pending',
          })),
        ];

        this.filteredUsers = [...this.users]; // Initialize filteredUsers with all users
        this.updatePagination();
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.isLoading = false;
      }
    );
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.last_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.currentPage = 1; // Reset to the first page when filtering
    this.updatePagination();
  }

  approveUser(userId: number): void {
    const payload = { status: 'Approved' };
    this.userService.updateUserStatus(userId, payload).subscribe(
      () => {
        this.users = this.users.map((user) =>
          user.id === userId ? { ...user, status: 'Approved' } : user
        );
        this.filteredUsers = [...this.users];
        this.updatePagination();
        console.log(`User ${userId} approved successfully.`);
      },
      (error) => {
        console.error(`Error approving user ${userId}:`, error);
      }
    );
  }

  denyUser(userId: number): void {
    const payload = { status: 'Denied' };
    this.userService.updateUserStatus(userId, payload).subscribe(
      () => {
        this.users = this.users.map((user) =>
          user.id === userId ? { ...user, status: 'Denied' } : user
        );
        this.filteredUsers = [...this.users];
        this.updatePagination();
        console.log(`User ${userId} denied successfully.`);
      },
      (error) => {
        console.error(`Error denying user ${userId}:`, error);
      }
    );
  }

  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    this.paginatedUsers = this.filteredUsers.slice(
      startIndex,
      startIndex + this.recordsPerPage
    );
    this.totalPages = Math.ceil(this.filteredUsers.length / this.recordsPerPage);
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }
}
