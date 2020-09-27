import { MenuService } from './../../_services/menu.service';
import { SessionService } from './../../_services/session.service';
import { LoginService } from './../../_services/login.service';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import appConstant from '../../../app.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appConstant = appConstant;
  profmenu = false;
  user: any;

  constructor(private menuService: MenuService,
              private sessionService: SessionService,
              private loginService: LoginService,
              private eRef: ElementRef) { }

  ngOnInit() {
    this.user = this.sessionService.getUser();
  }

  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    let parentFound = false;
    while (target != null && !parentFound) {
      if (target === this.eRef.nativeElement) {
        parentFound = true;
      }
      target = target.parentElement;
    }

    if (!parentFound) {
      this.profmenu = false;
    }
  }

  onMenuClick() {
    this.menuService.onToggle();
  }

  profileAction() {
    this.profmenu = !this.profmenu;
  }

  getAllRoles() {
    const roles = this.user.scopes;
    let rolesstr = '';

    for (let i = 0; i < roles.length; i++) {
      if (i) {
        rolesstr = rolesstr + ',';
      }
      rolesstr = rolesstr + '' + roles[i];
    }

    return rolesstr;
  }

  logout() {
    this.loginService.logout();
  }
}