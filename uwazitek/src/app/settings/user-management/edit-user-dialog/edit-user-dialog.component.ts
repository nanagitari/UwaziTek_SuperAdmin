import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA,MatDialogActions,MatDialogContent } from '@angular/material/dialog';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';



@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  imports: [ ReactiveFormsModule,FormsModule,
     CommonModule,MatFormFieldModule, MatDialogActions,MatDialogContent],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.css'
})
export class EditUserDialogComponent {

  constructor( public dialogRef: MatDialogRef<EditUserDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data:{user:any}){}


  onCancel ():void{
    this.dialogRef.close();
  }
  onSave ():void{
    this.dialogRef.close(this.data.user)
  }
}
