import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cfirst',
  standalone: false,
  templateUrl: './cfirst.component.html',
  styleUrl: './cfirst.component.css'
})
export class CfirstComponent  implements OnInit {
   email: string = 'Connect@advrameshdalal.com';
  isMobile = false;
  copied = false;
  @Output() open=new EventEmitter()

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
  openPopup(){
    this.open.emit()
  }
}
