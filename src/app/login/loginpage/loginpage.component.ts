import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './../../_common/_services/login.service';
import { SessionService } from './../../_common/_services/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  returnUrl: string;
  params: any;
  credential: any = {};
  
  constructor(private url: LocationStrategy,
              private router: Router,
              private sessionService: SessionService, 
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.params = this.getQueryParams(this.url.path());
  }

  loginApi() {
    let username = this.credential.username
    let password = this.credential.password

    console.log("username: " + username + ", password: " + password)

    if (username == undefined || username == "") {
      // TODO: shown error message. check UtilsService
    }

    if (password == undefined || password == "") {
      // TODO: shown error message. check UtilsService
    }

    const body = {
      'username': username,
      'password': btoa(password)
    }
    this.loginService.login(body).subscribe((res: any) => {
      console.log("server response: " + JSON.stringify(res))
      this.sessionService.setToken(res.token)
      this.sessionService.setUser(res)

      this.returnUrl = this.params['returnUrl'] || 'tasks'
      this.returnUrl = this.returnUrl.replace(/%2F/g, '/')
      this.returnUrl = this.returnUrl.replace(/%3F/g, '?')
      this.returnUrl = this.returnUrl.replace(/%3D/g, '=')
      this.returnUrl = this.returnUrl.replace(/%26/g, '&')

      if (this.returnUrl[0] === '/') {
        this.returnUrl = this.returnUrl.substr(1)
      }

      const queryParams = this.queryStringToJSON(this.returnUrl.split('?')[1])

      if (Object.keys(queryParams).length > 0 ) {
        this.router.navigate([`/${this.returnUrl.split('?')[0]}`], { queryParams: queryParams});
      } else {
          this.router.navigate([`/${this.returnUrl.split('?')[0]}`]);      
      }
    }, 
    (e: HttpErrorResponse) => {
      console.log("Error: " + e)
    })
  }

  logout() {
    this.loginService.logout();
  }

  private getQueryParams(locationSearch: string): any {
    const params = {};

    if (locationSearch) {
      locationSearch = locationSearch.split('?')[1];
      if (locationSearch) {
        const splited = locationSearch.split('&');

        for (let i = 0; i < splited.length; i++) {
          const propName = splited[i].split('=')[0];
          const propValue = splited[i].split('=')[1];
          params[propName] = propValue;
        }
      }
    }
    return params;
  }

  private queryStringToJSON(url) {
    let pairs
    if (url) { 
      pairs = url.split('&')
    } else { 
      pairs = []
    }

    const result = {}
    pairs.forEach(function(pair) {
      pair = pair.split('=')
      result[pair[0]] = decodeURIComponent(pair[1] || '')
    })

    return JSON.parse(JSON.stringify(result))
  }
}