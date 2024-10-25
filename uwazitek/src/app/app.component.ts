import { Component, NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,
    ReactiveFormsModule,
    SignupComponent,
    RouterModule,ResetpasswordComponent
    ,RouterOutlet,HttpClientModule,AdminDashboardComponent],
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uwazitek';
}


export class AppModule {}
