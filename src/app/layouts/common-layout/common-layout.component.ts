import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss']
})
export class CommonLayoutComponent implements OnInit {
  showheader = true;

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    const a = event.srcElement.scrollingElement;
    if (a) {
      this.showheader =  a.scrollTop < 30;
    }
  }
}