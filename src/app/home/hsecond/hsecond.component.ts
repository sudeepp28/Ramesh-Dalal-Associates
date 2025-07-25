import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hsecond',
  standalone: false,
  templateUrl: './hsecond.component.html',
  styleUrl: './hsecond.component.css'
})
export class HsecondComponent  implements AfterViewInit {
constructor(private el: ElementRef, private router:Router) {}



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
  goTo(id:number){
    this.router.navigate([`/details/${id}`])
  }
}
