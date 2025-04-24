import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-insurancehome',
    imports: [CommonModule,FormsModule],
    templateUrl: './insurancehome.component.html',
    styleUrl: './insurancehome.component.css'
})
export class InsurancehomeComponent implements OnInit {
claimReports: any;
getBadgeClass(arg0: any): string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined {
throw new Error('Method not implemented.');
}
searchQuery: any;
filterUsers() {
throw new Error('Method not implemented.');
}
currentTime: any;
ngOnInit(): void {
    this.updateTime();
}
updateTime(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-GB', { hour12: false });
  }
}
