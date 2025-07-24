import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './home/details/details.component';



const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', 
  anchorScrolling: 'enabled',           
  onSameUrlNavigation: 'reload'
};

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'service', component:ServiceComponent},
  {path:'contact', component:ContactComponent},
  {path:'details/:id',component:DetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
