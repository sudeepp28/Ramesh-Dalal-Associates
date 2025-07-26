import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { AppRoutingModule } from "./app.routing-module";



import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { HfirstComponent } from "./home/hfirst/hfirst.component";
import { HsecondComponent } from "./home/hsecond/hsecond.component";
import { HthirdComponent } from "./home/hthird/hthird.component";
import { HfourthComponent } from "./home/hfourth/hfourth.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ServiceComponent } from "./service/service.component";
import { SfirstComponent } from "./service/sfirst/sfirst.component";
import { SsecondComponent } from "./service/ssecond/ssecond.component";
import { SthirdComponent } from "./service/sthird/sthird.component";
import { SfourthComponent } from "./service/sfourth/sfourth.component";
import { ContactComponent } from "./contact/contact.component";
import { CfirstComponent } from "./contact/cfirst/cfirst.component";
import { DetailsComponent } from "./home/details/details.component";
import { DfirstComponent } from "./home/details/dfirst/dfirst.component";
import { FooterComponent } from "./footer/footer.component";
import { HfifthComponent } from "./home/hfifth/hfifth.component";
import { TopComponent } from "./home/top/top.component";
import { CsecondComponent } from "./contact/csecond/csecond.component";
import { CallNowComponent } from "./call-now/call-now.component";
// import { AdminComponent } from "./admin/admin.component";















@NgModule({
    declarations:[AppComponent,
       HomeComponent,HeaderComponent,HfirstComponent,HsecondComponent,HthirdComponent,HfourthComponent ,SidebarComponent ,ServiceComponent, SfirstComponent,SsecondComponent ,SthirdComponent,SfourthComponent ,ContactComponent,CfirstComponent,DetailsComponent,DfirstComponent,FooterComponent, HfifthComponent, TopComponent,CsecondComponent,CallNowComponent ],
    bootstrap:[AppComponent],
    imports: [FormsModule,
         BrowserModule,
         CommonModule
         ,AppRoutingModule,
        ReactiveFormsModule,
    HttpClientModule]
})

export class AppModule{}