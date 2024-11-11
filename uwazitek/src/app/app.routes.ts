import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboardLayout/admin-dashboard.component';
import { AddUserPageComponent } from './add-users/add-user-page.component';
import { UserHospitalComponent } from './add-users/hospital/user-hospital.component';
import { UserInsuranceComponent } from './add-users/insurance/user-insurance.component';
import { HomeLayoutComponent } from './home/home-layout/home-layout.component';
import { ViewUsersComponent } from './add-users/view-users/view-users.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { ActivityComponent } from './activity/activity.component';
import { SettingsComponent } from './settings/settings.component';
import { UserVerificationComponent } from './user-verification/user-verification.component';
import { SecuritySettingsComponent } from './settings/security-settings/security-settings.component';
import { SystemPreferenceComponent } from './settings/system-preference/system-preference.component';
import { UserManagementComponent } from './settings/user-management/user-management.component';
import { ClaimReportsComponent } from './activity/claim-reports/claim-reports.component';
import { CurrentUsersComponent } from './activity/current-users/current-users.component';
import { PolicyHolderComponent } from './add-users/policy-holder/policy-holder.component';


export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'resetpassword',component:ResetpasswordComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'admin-dashboard', component:AdminDashboardComponent},
    {path:'home', component: HomeLayoutComponent},
    {path:'add-users', component: AddUserPageComponent,
    children:[
        {path:'hospital', component:UserHospitalComponent},
        {path:'insurance',component:UserInsuranceComponent},
        {path:'policy-holder', component:PolicyHolderComponent},
    ]},
    {path:'hospital',component: UserHospitalComponent},
    {path:'insurance', component:UserInsuranceComponent},
    {path:'view-user', component:ViewUsersComponent},
    {path:'logout-dialog', component:LogoutDialogComponent},
    {path:'activity', component:ActivityComponent,
        children:[
            {path:'claim-report', component:ClaimReportsComponent},
            {path:'current-users', component:CurrentUsersComponent}
        ]
    },
    {path:'settings', component: SettingsComponent,
    children:[
        {path:'security-settings', component:SecuritySettingsComponent},
        {path:'system-preference', component:SystemPreferenceComponent},
        {path:'User-management', component:UserManagementComponent}
    ]
    },
    {path:'user-verification', component: UserVerificationComponent}
    

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})




export class AppRoutingModule { };
