import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone:false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
@Output() close= new EventEmitter()
constructor(private router:Router){}
  handleClose(){
    this.close.emit()
  }
  goTo(){
this.router.navigate(['/contact'])
this.close.emit()
  }
}
