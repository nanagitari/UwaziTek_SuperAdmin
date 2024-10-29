import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { AddUserPageComponent } from './add-users/add-user-page/add-user-page.component';
import { UserHospitalComponent } from './add-users/hospital/user-hospital.component';
import { UserInsuranceComponent } from './add-users/insurance/user-insurance.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'resetpassword',component:ResetpasswordComponent},
    {path:'admin-dashboard', component:AdminDashboardComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'add-users', component: AddUserPageComponent,
    children:[{path:'hospital', component:UserHospitalComponent},
        {path:'insurance',component:UserInsuranceComponent},]},
    {path:'hospital', component:UserHospitalComponent},
    {path:'insurance', component:UserInsuranceComponent},
    {path:'',redirectTo:'/admin-dashboard',pathMatch:'full'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})




export class AppRoutingModule { };
