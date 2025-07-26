import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
 standalone:false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 email: string = 'Connect@advrameshdalal.com';
Registered_Office='529, Sector - 6, Bahadurgarh, Distt. Jhajjar, Haryana-124507.'
chamberNo='103, Civil Court, Bahadurgarh, Distt. Jhajjar, Haryana-124507.'
gurugramOffice='Office no. 518, Deep Complex, Civil Lines, Oppo. Distt. Court,Gurugram, Haryana-1220011'

date=new Date()
year=this.date.getFullYear()

below=`@${this.year} Ramesh Dalal & Associates.  All Rights Reserved`
adminPhone1: string = '+919728985840'
adminPhone2: string = '+919315825109'
}


