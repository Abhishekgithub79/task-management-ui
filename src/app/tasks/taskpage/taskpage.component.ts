import { HeaderActionButton } from './../../_common/_interfaces/index';
import { TaskService } from './../../_common/_services/task.service';
import { SessionService } from './../../_common/_services/session.service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskpage',
  templateUrl: './taskpage.component.html',
  styleUrls: ['./taskpage.component.scss']
})
export class TaskpageComponent implements OnInit {
  user: any;
  today = new Date(new Date().toDateString());
  params: any;
  tasks: any[];
  headerActionButtons: HeaderActionButton[] = [
    {
      label: 'CREATE R',
      classes: 'btn-primary',
      click: () => this.create(),
      disabled: () => false
    }
  ];

  constructor(private url: LocationStrategy,
              private router: Router,
              private sessionService: SessionService, 
              private _ngZone: NgZone, 
              private taskService: TaskService) { }

  ngOnInit(): void {
    this.user = this.sessionService.getUser();
    
    if (this.user == undefined || this.user == {} || 
      this.user.token == undefined || this.user.token == "") {
        this._ngZone.run(() => {
          this.router.navigate(['/login'])
        });
    }

    this.params = this.getQueryParams(this.url.path());
    this.loadTasks()
  }

  loadTasks() {
    this.taskService.getAllTasks(this.params).subscribe((data: any) => {
      this.tasks = data
    })
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

  create() {

  }

  update() {
    
  }
}