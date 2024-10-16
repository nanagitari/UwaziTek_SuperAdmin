import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router'; 
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login';


export const routes: Routes = [
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'forgot password',component:ResetPasswordComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})




export class AppRoutingModule { }
