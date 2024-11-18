import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
import { Router } from 'express';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent implements OnInit {
hospitalDetails: any;
hospitals: any;

constructor (private userService : UserService, private router: Router){}


  ngOnInit(): void {
    this.getHospitalDetails();
   
 }

 getHospitalDetails(){
   this.userService.fetchHospitalDetails().subscribe({
     next: (data) => {
       this.hospitalDetails = data.data;
       console.log(this.hospitalDetails);
     },
     error: (error) => {
       console.error('Error fetching hospital details:', error);
     }
   });
 }
 //deleteHospital(id: string): void {
  //if (confirm('Are you sure you want to delete this hospital?')) {
    //this.userService.deleteHospital(id).subscribe({
     //next: () => {
        //this.hospitals = this.hospitals.filter((hospital: { id: string; }) => hospital.id !== id);
        //alert('Hospital deleted successfully.');
      //},
      //error: (error) => {
        //console.error('Error deleting hospital:', error);
        //alert('Failed to delete hospital.');
      //},
    //});
  //}
}

  
