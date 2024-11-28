
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
//import { EditUserDialogComponent } from '../../edit-user-dialog/edit-user-dialog.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    MatTableModule,
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    //EditUserDialogComponent,
    //ConfirmDeleteDialogComponent
  ],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
openEditUserDialog(_t35: any) {
throw new Error('Method not implemented.');
}
  users = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Michael Brown', email: 'michael.brown@example.com' }
  ];

  displayedColumns: string[] = ['name', 'email', 'actions'];

  constructor(private dialog: MatDialog) {} // Inject MatDialog service

  //openEditUserDialog(user: any): void {
   // const dialogRef = this.dialog.open(EditUserD, {
     // width: '400px',
     // data: { user: { ...user } }
    //});

    //dialogRef.afterClosed().subscribe((result: any) => {
      //if (result) {
       // Object.assign(user, result);
       // console.log('User updated:', user);
      //}
    //});
 // }

  openConfirmDeleteDialog(user: any): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '300px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.users = this.users.filter(u => u !== user);
        console.log('User deleted:', user);
      }
    });
  }
}
