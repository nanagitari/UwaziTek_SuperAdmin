import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';



bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(
      HttpClientModule,
    ),
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));

