import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './super-admin-dashboard/admin-dashboardLayout/admin-dashboard.component';
//import { HospitalOrganizationModule } from './Main-Menu/hospital-organization/hospital-organization.module';
import { UserInsuranceComponent } from './add-users/insurance/user-insurance.component';
//import { HomeLayoutComponent } from './Main-Menu/home/home-layout/home-layout.component';
import { ViewUsersComponent } from './add-users/view-users/view-users.component';
import { LogoutDialogComponent } from './dialog box/logout-dialog/logout-dialog.component';
//mport { ActivityComponent } from './Main-Menu/reports/activity/activity.component';
import { SettingsComponent } from './Preference/settings/settings.component';
import { ClaimReportsComponent } from './Main-Menu/reports/claim-reports/claim-reports.component';
import { ProfileComponent } from './Preference/profile/profile.component';
import { HelpcenterComponent } from './Preference/helpcenter/helpcenter.component';
//import { OverviewHospitalComponent } from './Main-Menu/hospital-organization/overview-hospital/overview-hospital.component';
//import { AddhospitalorganizationComponent } from './Main-Menu/hospital-organization/addhospitalorganization/addhospitalorganization.component';
//import { InsuranceOrganizationModule } from './Main-Menu/insurance-organization/insurance-organization.module';
//import { OverviewInsuranceComponent } from './Main-Menu/insurance-organization/overview-insurance/overview-insurance.component';
//import { AddInsuranceorganizationDetailsComponent } from './Main-Menu/insurance-organization/add-insuranceorganization/add-insuranceorganization-details.component';
import { HospitalDashboardComponent } from './hospital-admin-dashboard/hospitaldashboard/hospitaldashboard.component';
import { InsuranceDashboardComponent } from './insurance-admin-dashboard/insurance-dashboard/insurance-dashboard.component';
//import { ClaimsComponent } from './hospital-admin-dashboard/claims/claims.component';
//import { InsuranceAdminDashboardModule } from './insurance-admin-dashboard/insurance-admin-dashboard.module';
//import { DashboardComponent } from './hospital-admin-dashboard/dashboard/dashboard.component';



export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {
        path: 'super-admin-dashboard',
        loadChildren: () =>
          import('./super-admin-dashboard/admin-dashboard.module').then((m) => m.AdminDashboardModule),
      },
      {
        path: 'hospital-admin-dashboard',
        loadChildren: () =>
          import('./hospital-admin-dashboard/hospital-admin-dashboard.module').then((m) => m.HospitalAdminDashboardModule),
      },
      {
        path: 'insurance-admin-dashboard',
        loadChildren: () =>
          import('./insurance-admin-dashboard/insurance-admin-dashboard.module').then((m) => m.InsuranceAdminDashboardModule),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    {path:'admin-dashboard', component:AdminDashboardComponent},
    //{path:'home-layout', component: HomeLayoutComponent},
    //{path:'hospital-organization',component:HospitalOrganizationModule,
        //children:[
            //{path:'overview-hospital', component:OverviewHospitalComponent},
            //{path:'addhospitalorganization',component:AddhospitalorganizationComponent},
        //]
    //},
    //{path:'insurance-organization', component:InsuranceOrganizationModule,
        //children:[
            //{path:'overview-insurance', component:OverviewInsuranceComponent},
            //{path:'add-insuranceorganization', component:AddInsuranceorganizationDetailsComponent},
        //]
    //},
    //{path:'logout-dialog', component:LogoutDialogComponent},
    //{path:'activity', component:ActivityComponent,
        //children:[
            //{path:'claim-report', component:ClaimReportsComponent},
        //]
    //},
    //{path:'settings', component: SettingsComponent},
    //{path: 'profile', component: ProfileComponent},
    //{path:'helpcenter', component: HelpcenterComponent},
    {path:'hospitaldashboard', component:HospitalDashboardComponent},
    {path:'insurance-dashboard', component:InsuranceDashboardComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})




export class AppRoutingModule { };