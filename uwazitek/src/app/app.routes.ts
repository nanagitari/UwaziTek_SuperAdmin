import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'resetpassword',component:ResetpasswordComponent},
      {path:'dashboard',component:DashboardComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})




export class AppRoutingModule { };
