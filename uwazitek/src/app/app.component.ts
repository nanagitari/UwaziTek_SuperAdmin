import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//import { AdminDashboardModule } from './super-admin-dashboard/admin-dashboard.module';
import { CommonModule } from '@angular/common';





@Component({
    selector: 'app-root',
    imports: [
        ReactiveFormsModule,
        RouterModule,
        RouterOutlet,
        CommonModule,
    ],
    providers: [HttpClientModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uwazitek';
}


export class AppModule {

}
