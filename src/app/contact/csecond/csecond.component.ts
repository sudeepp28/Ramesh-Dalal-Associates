import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csecond',
  standalone:false,
  templateUrl: './csecond.component.html',
  styleUrl: './csecond.component.css'
})
export class CsecondComponent implements OnInit {
  email: string = 'Connect@advrameshdalal.com';
  isMobile = false;
  copied = false;

  ngOnInit(): void {
    // Simple device check using navigator.userAgent
    const ua = navigator.userAgent.toLowerCase();
    this.isMobile = /iphone|ipad|ipod|android/.test(ua);
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
 
