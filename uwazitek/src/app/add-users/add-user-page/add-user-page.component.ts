import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-page',
  standalone: true,
  imports: [],
  templateUrl: './add-user-page.component.html',
  styleUrl: './add-user-page.component.css'
})
export class AddUserPageComponent {
  usertype!: string;
navigateTo: any;

  constructor (private router: Router){}
    


}
