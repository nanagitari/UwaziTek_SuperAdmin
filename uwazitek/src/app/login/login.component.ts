import { Component, Input,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ResetPasswordComponent],
  template: `
    <section class='login-container'>
    
      <form class='login-form'>
        <label for="username">Username:</label>
        <input type="text" id="username" required>

        <label for="password">Password:</label>
        <input type="password" id="password" required>

        <button type="submit">LOG IN</button>

      <div id="forget">
       <a link ="uwazitek\src\app\reset-password">Forgot Password?</a>
      </div>
        <div id="form-feedback"></div>

      </form>
    </section>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
@Input () user: any;


}


