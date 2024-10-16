import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, ResetPasswordComponent],
  template: `
  <main>
      <header class="brand-name">
      <h1> UWAZITEK </h1>
      </header>
      <section class="content">
      <h2> Login Page </h2>
        <app-login></app-login>
      </section>
    </main>
  `,
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uwazitek';
}
