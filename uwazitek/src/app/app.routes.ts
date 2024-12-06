import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboardLayout/admin-dashboard.component';
import { AddUserPageComponent } from './add-users/add-user-page.component';
import { UserHospitalComponent } from './add-users/hospital/user-hospital.component';
import { UserInsuranceComponent } from './add-users/insurance/user-insurance.component';
import { HomeLayoutComponent } from './Main-Menu/home/home-layout/home-layout.component';
import { ViewUsersComponent } from './add-users/view-users/view-users.component';
import { LogoutDialogComponent } from './dialog box/logout-dialog/logout-dialog.component';
import { ActivityComponent } from './Main-Menu/reports/activity/activity.component';
import { SettingsComponent } from './Preference/settings/settings.component';
import { UserVerificationComponent } from './user-verification/user-verification.component';
//import { SecuritySettingsComponent } from './Preference/settings/security-settings/security-settings.component';
//import { SystemPreferenceComponent } from './Preference/settings/system-preference/system-preference.component';
//import { UserManagementComponent } from './Preference/settings/user-management/user-management.component';
import { ClaimReportsComponent } from './Main-Menu/reports/claim-reports/claim-reports.component';
import { ProfileComponent } from './Preference/profile/profile.component';
import { HelpcenterComponent } from './Preference/helpcenter/helpcenter.component';
//import { CurrentUsersComponent } from './Main-Menu/reports/activity/current-users/current-users.component';


export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'resetpassword',component:ResetpasswordComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},

    { path: '', redirectTo: 'home-layout', pathMatch: 'full' },
    {path:'admin-dashboard', component:AdminDashboardComponent},
    
    {path:'home-layout', component: HomeLayoutComponent},
    {path:'add-users', component: AddUserPageComponent,
    children:[
        {path:'hospital', component:UserHospitalComponent},
        {path:'insurance',component:UserInsuranceComponent},
        
    ]},
    {path:'hospital',component: UserHospitalComponent},
    {path:'insurance', component:UserInsuranceComponent},
    {path:'view-user', component:ViewUsersComponent},
    
    {path:'logout-dialog', component:LogoutDialogComponent},
    {path:'activity', component:ActivityComponent,
        children:[
            {path:'claim-report', component:ClaimReportsComponent},
        ]
    },
    {path:'settings', component: SettingsComponent},
    {path:'user-verification', component: UserVerificationComponent},
    {path: 'profile', component: ProfileComponent},
    {path:'helpcenter', component: HelpcenterComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})




export class AppRoutingModule { };
