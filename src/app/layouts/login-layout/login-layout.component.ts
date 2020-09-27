import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  template: '<app-loader></app-loader><p-messages></p-messages><router-outlet></router-outlet>',
  styles: []
})
export class LoginLayoutComponent implements OnInit {
  constructor() { }

  ngOnInit() {}
}