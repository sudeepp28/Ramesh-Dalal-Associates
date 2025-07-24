import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dfirst',
  standalone: false,
  templateUrl: './dfirst.component.html',
  styleUrl: './dfirst.component.css'
})
export class DfirstComponent {
@Input() data:any
}
