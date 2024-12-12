import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hospitalhome',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './hospitalhome.component.html',
  styleUrl: './hospitalhome.component.css'
})
export class HospitalhomeComponent implements OnInit {
claimReports: any;
getBadgeClass(arg0: any): string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined {
throw new Error('Method not implemented.');
}
  searchQuery: any;
  //usertype: string | undefined;
  public userName: string = '';  
  currentTime: string = '';
  showNotifications: boolean = false;
 
  constructor (private router: Router){}

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') || 'SuperAdmin' ;
    this.updateTime();
    setInterval(() =>this.updateTime(),1000);
  }
 
  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications; 
  }
  
  updateTime():void{
    const now= new Date();
    this.currentTime= now.toLocaleTimeString('en-GB',{hour12:false});
  }
 
  //onclick(usertype: string){
    //this.usertype=usertype;
   //}
   filterUsers() {
    throw new Error('Method not implemented.');
    }

  onCardClick(route: string): void {
    this.router.navigate([route]);
  }
  getstatistics(){
    
  }
}
