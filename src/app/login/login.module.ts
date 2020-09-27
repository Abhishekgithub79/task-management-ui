import { SharedModule } from './../shared.module';
import { LoginService } from './../_common/_services/login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from '../layouts/login-layout/login-layout.component';
import { CommonLayoutComponent } from '../layouts/common-layout/common-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginpageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [LoginLayoutComponent, LoginpageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [LoginService],
})
export class LoginModule { }