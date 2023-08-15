import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent {

 


  public darckmode=1

   adddarckmode():void{
    this.darckmode +=1
    console.log(this.darckmode)
    
  }
 
  
}
