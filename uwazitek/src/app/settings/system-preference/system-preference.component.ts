import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-system-preference',
  standalone: true,
  imports: [CommonModule,MatSelectModule, MatFormFieldModule, ReactiveFormsModule,FormsModule],
  templateUrl: './system-preference.component.html',
  styleUrl: './system-preference.component.css'
})
export class SystemPreferenceComponent {
  currentTheme= 'light';
  selectedLanguage='English';
  languages=['English','Spanish','French','German'];
  dateFormat='MM/DD/YYYY';


  toggleTheme(){
    this.currentTheme= this.currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', this.currentTheme=== 'dark');
  }

}
