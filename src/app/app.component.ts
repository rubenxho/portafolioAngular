import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolioAngular';

  public arrayScroll: number [];

  constructor(){
    this.arrayScroll= new Array(3)

  }

  obtenerScrollAbout(scrollAbout:number){
    this.arrayScroll[0]=scrollAbout;
  }

  obtenerScrollPortafolio(scrollPortafolio:number){
    this.arrayScroll[1]=scrollPortafolio;
  }

}
