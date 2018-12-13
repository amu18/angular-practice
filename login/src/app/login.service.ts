import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() {
    this.isUserLoggedIn = false
  }

  private isUserLoggedIn;

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}
