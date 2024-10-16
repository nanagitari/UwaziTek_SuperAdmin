import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class='reset-container'>
    <h2>Reset Password page </h2>
      <form class='reset-form'>
        <label for="First Name">First name:</label>
        <input type="text" id="Fname" required>

        <label for="Second Name">Second name:</label>
        <input type="text" id="Sname" required>

        <label for="email">Email:</label>
        <input type="email" id="email" required>

        <label> for="password">New Password:</label>
        <input type="password" id="password" required>

        <label for="password">Confirm Password:</label>
        <input type="password" id="password" required>

        <button type="submit">RESET</button>

        <div id="form-feedback"></div>

      </form>
    </section>

  `,
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
@Input ()user:any
}
