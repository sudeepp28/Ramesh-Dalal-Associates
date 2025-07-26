import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit{
constructor(private el: ElementRef) {}

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

  ispopup=false;

  openpopup(){
    this.ispopup=true
  }
  closePopup(){
    this.ispopup=false
  }
}
