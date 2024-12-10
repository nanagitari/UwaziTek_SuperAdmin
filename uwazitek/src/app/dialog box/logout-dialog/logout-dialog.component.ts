import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-logout-dialog',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './logout-dialog.component.html',
  styleUrl: './logout-dialog.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LogoutDialogComponent {
  constructor(public dialogRef: MatDialogRef<LogoutDialogComponent>, private router:Router) {}
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
    
    this.router.navigate(['/login']);
  }

}
