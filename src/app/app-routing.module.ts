import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './nav/nav-footer/footer/footer.component';
import { LogoComponent } from './nav/nav-footer/nav bar/logo/logo.component';
import { HomeComponent } from './nav/nav-footer/nav bar/home/home.component';
import { GaleriComponent } from './nav/nav-footer/nav bar/galeri/galeri.component';
import { ContactComponent } from './nav/nav-footer/nav bar/contact/contact.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'Galeri',
    component: GaleriComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },
  
  {
    path: 'footer',
    component: FooterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
