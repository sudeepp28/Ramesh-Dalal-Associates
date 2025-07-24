import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hfourth',
  standalone: false,
  templateUrl: './hfourth.component.html',
  styleUrl: './hfourth.component.css'
})
export class HfourthComponent implements AfterViewInit{
constructor(private el: ElementRef, private router: Router) {}

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.animate-on-scroll');
     const elements2 = this.el.nativeElement.querySelectorAll('.animateImg-on-scroll')
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

    elements.forEach((el: Element) => observer.observe(el))
    elements2.forEach((el: Element) => observer.observe(el));
  }
  goTo(){
    this.router.navigate(['/service'])
  }
}
