import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService} from '../../service/auth.service';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-current-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-users.component.html',
  styleUrl: './current-users.component.css'
})
export class CurrentUsersComponent {
currentUsers: any;
activeUsers: any;



}
