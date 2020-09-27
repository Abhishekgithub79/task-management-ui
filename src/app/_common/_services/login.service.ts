import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import appConstant from '../../app.constant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, 
              private sessionService: SessionService,
              private _ngZone: NgZone, 
              private router: Router) { }

  login(body = {}) {
    return this.http.post(appConstant.apiUrls.login, body)
  }

  logout() {
    this.sessionService.setToken(undefined)
    this.sessionService.setUser(undefined)
    this._ngZone.run(() => {
      this.router.navigate(['/login'])
    });
  }
}