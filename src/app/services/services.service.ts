import { Injectable } from '@angular/core';
import { Login } from '../classes/login';
import {MOCK} from '../mock-carrinho';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Produtos } from '../Produtos';


@Injectable()
export class ServicesService {

  private nextId: number;
  lista: Produtos[];

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

  getlista(): Observable<Produtos[]> {
    if (localStorage.getItem("lista") === null) {
      this.lista = MOCK;
    } else {
      this.lista = JSON.parse(localStorage.getItem("lista"));
    }
    return of(this.lista);
}

}
