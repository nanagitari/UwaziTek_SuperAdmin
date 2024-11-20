import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../service/user.service';
import { forkJoin } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-users',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})

export class ViewUsersComponent implements OnInit  {
searchQuery: string='';
usertype: string = '';
isLoading: boolean = false;
users: any[]=[];
filteredUsers: any[]=[];



constructor ( private userService: UserService){}

ngOnInit(): void {
  this.fetchData();
  
}

fetchData(): void {
  this.isLoading= true;


  forkJoin({
    hospitals: this.userService.fetchHospitalDetails(),
    insurances: this.userService.fetchInsuranceDetails()
  }).subscribe(
    ({ hospitals, insurances }) => {
      const hospitalArray = Array.isArray(hospitals.data) ? hospitals.data : [];
      const insuranceArray = Array.isArray(insurances.data) ? insurances.data : [];
      console.log('Hospitals Response:', hospitals);
      console.log('Insurances Response:', insurances);
      this.users = [
        ...hospitalArray.map((hospital: {
          hospitalId: any; hospitalName:any; hospitalAddress:any; hospitalBranch:any;
} ) => ({
          type: 'Hospital',
          Id: hospital.hospitalId,
          name: hospital.hospitalName,
          Address: hospital.hospitalAddress,
          AdditionalInfo: hospital.hospitalBranch
        })),
        ...insuranceArray.map((insurance: { insurance_id: any; insurance_name: any; insuranceAddress: any; insuranceContactPhoneNumber: any; }) => ({
          type: 'Insurance',
          Id: insurance.insurance_id,
          name: insurance.insurance_name,
          Address: insurance.insuranceAddress,
          AdditionalInfo: insurance.insuranceContactPhoneNumber
        }))
      ];
      this.filteredUsers = [...this.users]; 
        this.isLoading = false;
    },
    (error) => {
      console.error('Error fetching data:', error);
      this.isLoading = false;
    }
  );
}

deleteHospital(Id: string): void {
    if (confirm('Are you sure you want to delete this hospital?')) {
      this.userService.deleteHospital(Id).subscribe({
        next: () => {
          console.log('Hospital deleted successfully:', Id);
          this.users = this.users.filter((user: any) => user.type !== 'Hospital' || user.Id !== Id);
          this.filterUsers();
        },
        error: (err) => {
          console.error('Error deleting hospital:', err);
          alert('An error occurred while deleting the hospital.');
        }
      });
    }
  }
  
deleteInsuranceDetails(Id: string): void {
    if (confirm('Are you sure you want to delete this insurance?')) {
      this.userService.deleteHospital(Id).subscribe({
        next: () => {
          console.log('Hospital deleted successfully:', Id);
          this.users = this.users.filter((user: any) => user.type !== 'Hospital' || user.Id !== Id);
          this.filterUsers();
        },
        error: (err) => {
          console.error('Error deleting hospital:', err);
          alert('An error occurred while deleting the hospital.');
        }
      });
    }
  }
  filterUsers(): void {
    const query = this.searchQuery.trim().toLowerCase();
  
    this.filteredUsers = this.users.filter(user =>
      (user.name?.toLowerCase() || '').includes(query) ||
      (user.type?.toLowerCase() || '').includes(query) ||
      (user.Address?.toLowerCase() || '').includes(query) ||
      (user.AdditionalInfo?.toLowerCase() || '').includes(query)
    );
  }
  
  
}



