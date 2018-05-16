import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  public loginT: string;

  constructor(private servico: ServicesService) {
    this.loginT = '';
  }

  ngOnInit() {
  }
  public addLogin(): void {
    this.servico.addLogin(this.loginT); 
    this.loginT = 'Login';
  }
}
