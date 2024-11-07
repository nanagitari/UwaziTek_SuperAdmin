import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-verification',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './user-verification.component.html',
  styleUrl: './user-verification.component.css'
})
export class UserVerificationComponent {

  users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', status: 'Pending' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', status: 'Pending' },
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe((data: { id: number; name: string; email: string; status: string; }[]) => {
      this.users = data;
    });
  }

  approveUser(user: any): void {
    user.status = 'Approved';
    this.userService.updateUserStatus(user.id, 'Approved').subscribe((response: any) => {
      console.log('User approved:', response);
    });
  }

  rejectUser(user: any): void {
    user.status = 'Rejected';
    this.userService.updateUserStatus(user.id, 'Rejected').subscribe((response: any) => {
      console.log('User rejected:', response);
    });
  }
}

