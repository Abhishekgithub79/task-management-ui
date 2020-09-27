import { TasksModule } from './tasks/tasks.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: 'tasks',
    loadChildren: () => TasksModule
  },
  // TODO: add labels routing here.
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
