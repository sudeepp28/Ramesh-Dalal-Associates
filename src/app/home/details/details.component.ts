import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { data } from '../../data.Model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements AfterViewInit, OnInit {

  personData=data
  selectedPerson:any
  

  constructor(private el: ElementRef , private route:ActivatedRoute) {}
  
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
    ngOnInit(): void {
      this.getPeRson()
    }

getPeRson(){
  const selectedId= this.route.snapshot.paramMap.get('id')
  console.log(selectedId)

  this.selectedPerson=this.personData.find(a=>a.id===selectedId)

  console.log(this.selectedPerson)
}
}
