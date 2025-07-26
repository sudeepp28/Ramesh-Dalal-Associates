import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-call-now',
  standalone:false,
  templateUrl: './call-now.component.html',
  styleUrl: './call-now.component.css'
})
export class CallNowComponent {
@Output() close = new EventEmitter<void>();

  adminPhone: string = '+919728985840';

  closePopup() {
    this.close.emit();
  }
}
