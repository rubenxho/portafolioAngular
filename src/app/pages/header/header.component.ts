import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() scrollComponentes: number[];
  @ViewChild('menuResponsive') menuResponsive:ElementRef
  @ViewChild('scroll') headerScroll:ElementRef
  @ViewChild('aqui') aqui:ElementRef
  public menuDesplegado:Boolean
  public pointer:String;

  constructor() { 
    this.menuDesplegado=false;
    this.pointer="inicio"
  }

  @HostListener("window:scroll", []) 
    functionScroll() {
    const verticalOffset = document.documentElement.scrollTop
    this.headerScroll.nativeElement.classList.toggle('scroll',verticalOffset>0)
    if(verticalOffset>=0 && verticalOffset<this.scrollComponentes[0]-80){this.pointer="inicio"}
    else if(verticalOffset>=this.scrollComponentes[0]-80 && verticalOffset<this.scrollComponentes[1]-80){this.pointer="sobre-mi"}  
    else if(verticalOffset>=this.scrollComponentes[1]-80 && verticalOffset<this.scrollComponentes[1]+200 ) {this.pointer="portafolio"} 
    else if(verticalOffset>=this.scrollComponentes[1]+200 ) {this.pointer="contacto"} 
    
  }

  desplegarMenu(){
    this.menuResponsive.nativeElement.classList.toggle('mostrar')
    this.menuDesplegado= !this.menuDesplegado;
  }

  cambiarPointer(){
    if(this.menuDesplegado==true){
      this.desplegarMenu()
    }
  }
  
  ngOnInit(): void {
  }

}
