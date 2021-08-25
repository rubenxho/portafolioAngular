import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  @ViewChild('menuAbout') menuAbout:ElementRef;
  @Output() eventoScrollAbout= new EventEmitter<number>();

  constructor() { }

  // Funcion addListener de scroll
  @HostListener("window:scroll", []) 
    functionScroll() {
    const scrollTopAbout = this.menuAbout.nativeElement.offsetTop
    this.eventoScrollAbout.emit(scrollTopAbout)  
  }

  ngOnInit(): void {
  }

}
