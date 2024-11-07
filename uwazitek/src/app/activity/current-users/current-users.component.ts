import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-users.component.html',
  styleUrl: './current-users.component.css'
})
export class CurrentUsersComponent {
currentUsers: any;

}
