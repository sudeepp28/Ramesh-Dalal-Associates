import { Component } from '@angular/core';

@Component({
  selector: 'app-hfifth',
  standalone: false,
  templateUrl: './hfifth.component.html',
  styleUrl: './hfifth.component.css'
})
export class HfifthComponent {
 logos: string[] = [
    'assets/image (20).png',
    'assets/image (21).png',
    'assets/image (22).png',
    'assets/image (23).png',
    'assets/image (24).png',
    'assets/image (25).png',
    'assets/image (26).png',
    'assets/image (27).png',
    'assets/image (38).png',
    'assets/image (39).png',
    'assets/image (28).png',
    'assets/image (29).png',
    'assets/image (30).png',
    'assets/image (32).png',
    'assets/image (33).png',
    'assets/image (34).png',
    'assets/image (35).png',
    'assets/image (36).png',
    'assets/image (37).png',
  ];

  // Duplicate logos for seamless loop
  duplicatedLogos: string[] = [];

  constructor() {
    this.duplicatedLogos = [...this.logos, ...this.logos];
  }
}
