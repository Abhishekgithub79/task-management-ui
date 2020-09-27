import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    private token = 'token'

    constructor() {}

    getToken() {
        return this.get(this.token)
    }

    setToken(value: string) {
        this.set(this.token, value)
    }

    getUser() {
        return JSON.parse(this.get('user'))
    }

    setUser(data = '') {
        this.set('user', JSON.stringify(data))
    }

    private get(key: string) {
        return sessionStorage.getItem(key)
    }

    private set(key: string, value: string) {
        if (value == null){
            sessionStorage.removeItem(key)
        } else {
            sessionStorage.setItem(key, value)
        }
    }
}