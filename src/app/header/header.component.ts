import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Output() open=new EventEmitter()

constructor(private router:Router){}
opensideBar(){
  this.open.emit()
}
goTo(){
this.router.navigate(['/'])
}
goContact(){
  this.router.navigate(['/contact'])
}

}
