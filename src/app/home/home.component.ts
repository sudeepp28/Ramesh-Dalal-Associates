import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
 standalone:false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate only once
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach((el: Element) => observer.observe(el));
  }
}
