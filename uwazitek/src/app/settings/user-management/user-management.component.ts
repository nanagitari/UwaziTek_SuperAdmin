import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-management',
  standalone: true,
  imports:[MatTableModule,RouterModule, CommonModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  
  users = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Michael Brown', email: 'michael.brown@example.com' }
  ];

  displayedColumns: string[] = ['name', 'email', 'actions'];

  editUser(user: any) {
    console.log('Edit user:', user);
  }
  deleteUser(user: any) {
    console.log('Delete user:', user);
  
  }
}
