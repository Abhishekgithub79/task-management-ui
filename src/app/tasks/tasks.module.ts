import { CommonLayoutComponent } from './../layouts/common-layout/common-layout.component';
import { TaskService } from './../_common/_services/task.service';
import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskpageComponent } from './taskpage/taskpage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {
        path: '',
        component: TaskpageComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: TaskpageComponent },
          // { path: '/:id', component: , pathMatch: 'full' }
        ]
      },
      {
        path: 'list',
        component: TaskpageComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: TaskpageComponent },
          // { path: '/:id', component: , pathMatch: 'full' }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [TaskpageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [TaskService]
})
export class TasksModule { }