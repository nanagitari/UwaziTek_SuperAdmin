import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardModule } from './super-admin-dashboard/admin-dashboard.module';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet,HttpClientModule,
    AdminDashboardModule
    ],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uwazitek';
}


export class AppModule {

}
