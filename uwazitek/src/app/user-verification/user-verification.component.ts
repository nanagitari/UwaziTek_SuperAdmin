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
rejectUser(_t12: { id: number; name: string; email: string; status: string; }) {
throw new Error('Method not implemented.');
}
approveUser(_t12: { id: number; name: string; email: string; status: string; }) {
throw new Error('Method not implemented.');
}

  users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', status: 'Pending' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', status: 'Pending' },
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers() {
    throw new Error('Method not implemented.');
  }
}