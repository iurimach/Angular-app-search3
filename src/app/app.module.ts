import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavFooterComponent } from './nav/nav-footer/nav-footer.component';
import { FooterComponent } from './nav/nav-footer/footer/footer.component';
import { LogoComponent } from './nav/nav-footer/nav bar/logo/logo.component';
import { HomeComponent } from './nav/nav-footer/nav bar/home/home.component';
import { GaleriComponent } from './nav/nav-footer/nav bar/galeri/galeri.component';
import { ContactComponent } from './nav/nav-footer/nav bar/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    
    NavFooterComponent,
    FooterComponent,
    LogoComponent,
    HomeComponent,
    GaleriComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    
    AppRoutingModule, 
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
