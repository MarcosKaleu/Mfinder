import { Injectable } from '@angular/core';
import { Login } from '../classes/login';

@Injectable()
export class ServicesService {

  private nextId: number;

  constructor() {
    let login = this.getLogin();

    if (login.length == 0) {
      this.nextId = 0;
    } else {
      let maxId = login[login.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public addLogin(text: string): void {
    let logins = new Login(this.nextId, text);
    let login = this.getLogin();
    login.push(logins);

    this.setlocalS(login);
    this.nextId++;
  }

  public getLogin(): Login[] {
    let localStorageItem = JSON.parse(localStorage.getItem('login'));
    return localStorageItem == null ? [] : localStorageItem.login;
  }


  private setlocalS(login: Login[]): void {
    localStorage.setItem('login', JSON.stringify({ login: login }));
  }
}
