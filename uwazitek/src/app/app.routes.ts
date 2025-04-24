import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
// import { HomeLayoutComponent } from './super-admin-dashboard/home-layout/home-layout.component';
import { LogoutDialogComponent } from './dialog box/logout-dialog/logout-dialog.component';
import { ActivityComponent } from './super-admin-dashboard/activity/activity.component';
import { SettingsComponent } from './Preference/settings/settings.component';
import { ClaimReportsComponent } from './Main-Menu/reports/claim-reports/claim-reports.component';
import { ProfileComponent } from './Preference/profile/profile.component';
import { HelpcenterComponent } from './Preference/helpcenter/helpcenter.component';
import { OverviewHospitalComponent } from './super-admin-dashboard/hospital-organization/overview-hospital/overview-hospital.component';
import { OverviewInsuranceComponent } from './super-admin-dashboard/insurance-organization/overview-insurance/overview-insurance.component';
import { AddhospitalorganizationComponent } from './super-admin-dashboard/hospital-organization/addhospitalorganization/addhospitalorganization.component';
import { AddInsuranceorganizationDetailsComponent } from './super-admin-dashboard/insurance-organization/add-insuranceorganization/add-insuranceorganization-details.component';
import { HospitalDashboardComponent } from './hospital-admin-dashboard/hospitaldashboard/hospitaldashboard.component';
import { InsuranceDashboardComponent } from './insurance-admin-dashboard/insurance-dashboard/insurance-dashboard.component';
import { HospitalhomeComponent } from './hospital-admin-dashboard/hospitalhome/hospitalhome.component';
import { AdmindashboardComponent } from './super-admin-dashboard/admindashboard/admindashboard.component';
import { HospitalOrganizationModule } from './super-admin-dashboard/hospital-organization/hospital-organization.module';
import { InsuranceOrganizationModule } from './super-admin-dashboard/insurance-organization/insurance-organization.module';




export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    {path:'login',component:LoginComponent}, 
    {path:'admindashboard', component:AdmindashboardComponent},
    {path:'hospitaldashboard', component:HospitalDashboardComponent},
    {path:'insurance-dashboard', component:InsuranceDashboardComponent},   
    {path:'overview-hospital', component:OverviewHospitalComponent},
    {path:'addhospitalorganization',component:AddhospitalorganizationComponent},   
    {path:'overview-insurance', component:OverviewInsuranceComponent},
    {path:'add-insuranceorganization', component:AddInsuranceorganizationDetailsComponent},
    {path:'logout-dialog', component:LogoutDialogComponent},
    {path:'activity', component:ActivityComponent,
        children:[
            {path:'claim-report', component:ClaimReportsComponent},
        ]
    },
    {path:'settings', component: SettingsComponent},
    {path: 'profile', component: ProfileComponent},
    {path:'helpcenter', component: HelpcenterComponent},
    {path:'hospitaldashboard', component:HospitalDashboardComponent},
    {path:'insurance-dashboard', component:InsuranceDashboardComponent},
    {path:'hospitalhome', component:HospitalhomeComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})




export class AppRoutingModule { };