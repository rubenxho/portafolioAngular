import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuResponsive') menuResponsive:ElementRef
  @ViewChild('scroll') headerScroll:ElementRef
  @ViewChild('aqui') aqui:ElementRef
  public menuDesplegado:Boolean
  public pointer:String;

  constructor() { 
    this.menuDesplegado=false;
  }

  @HostListener("window:scroll", []) 
    functionScroll() {
    const verticalOffset = document.documentElement.scrollTop
    this.headerScroll.nativeElement.classList.toggle('scroll',verticalOffset>0)
    if(verticalOffset==0){this.pointer="inicio"}   

    console.log(verticalOffset)
  }

  desplegarMenu(){
    this.menuResponsive.nativeElement.classList.toggle('mostrar')
    this.menuDesplegado= !this.menuDesplegado;
  }

  cambiarPointer(posicion:String){
    this.pointer=posicion;
    if(this.menuDesplegado==true){
      this.desplegarMenu()
    }
  }
  
  ngOnInit(): void {
  }

}
