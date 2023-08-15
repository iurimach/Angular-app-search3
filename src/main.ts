import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



  function darck(){
  
    if (document.body.style.backgroundColor = "black"){
      document.body.style.color ="white"
    }
  }
  function white(){
  
    if (document.body.style.backgroundColor = "white"){
      document.body.style.color = "black"
    }
  }