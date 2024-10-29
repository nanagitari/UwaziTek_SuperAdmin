import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { AdminDashboardModule } from './app/admin-dashboard/admin-dashboard.module';



bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(
      HttpClientModule,
      AdminDashboardModule,
    ),
    provideRouter(routes), provideAnimationsAsync()
  ]
,
})
  .catch((err) => console.error(err));

