import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @ViewChild('menuPortafolio') menuPortafolio:ElementRef;
  @Output() eventoScrollPortafolio= new EventEmitter<number>();
  public proyectos: Proyecto [];

  constructor() { }

  // Funcion addListener de scroll
  @HostListener("window:scroll", [])
    functionScroll() {
      const scrollTopPortafolio = this.menuPortafolio.nativeElement.offsetTop;
      this.eventoScrollPortafolio.emit(scrollTopPortafolio)
    }

  ngOnInit(): void {
    this.proyectos=[
      new Proyecto("Portafolio personal", "Portafolio personal ","ANGULAR","../../../assets/portafolio.jpg","#","https://github.com/rubenxho/portafolioAngular"),
      new Proyecto("UrTurn", "App para la gestion de colas","ANGULAR","../../../assets/urturn.jpg","https://urturn.herokuapp.com/","https://github.com/rubenxho/urturnAngular"), 
      new Proyecto("Reloj digital", "Reloj digital con dark/light mode","HTML, CSS & JS","../../../assets/reloj.jpg","https://rubenxho.github.io/","https://github.com/rubenxho/rubenxho.github.io"),
    ]
  }

}
