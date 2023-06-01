import { Injectable } from '@angular/core';
import {BehaviorSubject, filter} from "rxjs";

interface User {
  name: string;
  email: string;
  bio: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$ = new BehaviorSubject<User | null>(null)

  constructor() { }

  public getUser(){
    setTimeout(() => {
      this.user$.next({
        name: 'Thapelo',
        email: 'thapelo@email.com',
        bio: 'Subscribe to my channel'
      })
    }, 2000);

    return this.user$

  }
}
