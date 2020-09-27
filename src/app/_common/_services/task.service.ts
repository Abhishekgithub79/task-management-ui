import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session.service';
import appConstant from '../../app.constant';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor(private http: HttpClient, 
        private sessionService: SessionService,
        private _ngZone: NgZone, 
        private router: Router) { }

    getAllTasks(filters = {}) {
        let headers = {
            'Authorization': this.sessionService.getToken() || ''
        }
        
        let params = { }
        if (filters['status'] != undefined){
            params['status'] = filters['status']
        }
        if (filters['priority'] != undefined){
            params['priority'] = filters['priority']
        }
        if (filters['labels'] != undefined){
            params['labels'] = filters['labels']
        }
        if (filters['created_at'] != undefined){
            params['created_at'] = filters['created_at']
        }
        
        let options = {params: params, headers: headers}

        return this.http.get(appConstant.apiUrls.allTasks, options);
    }
}