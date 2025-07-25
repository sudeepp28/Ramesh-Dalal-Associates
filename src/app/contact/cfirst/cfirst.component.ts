import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cfirst',
  standalone: false,
  templateUrl: './cfirst.component.html',
  styleUrl: './cfirst.component.css'
})
export class CfirstComponent  implements OnInit {
  email = 'ramesh.labourlawconsultant@gmail.com';
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
