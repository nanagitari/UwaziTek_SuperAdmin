import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { UserManagementComponent } from './user-management/user-management.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatTabsModule, UserManagementComponent,
  ]
})
export class SettingsModule { }
