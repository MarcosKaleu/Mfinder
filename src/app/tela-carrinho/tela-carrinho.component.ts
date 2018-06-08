import { Component, OnInit, Input } from '@angular/core';
import {ServicesService} from'../services/services.service';
import { Produtos } from '../Produtos';


@Component({
  selector: 'app-tela-carrinho',
  templateUrl: './tela-carrinho.component.html',
  styleUrls: ['./tela-carrinho.component.css']
})
export class TelaCarrinhoComponent implements OnInit {
  @Input() lista;
  prods: Produtos[]=[];
  constructor(private servico:ServicesService) { }

  getlista(): void{
    this.servico.getlista().subscribe(prods=>(this.prods=prods))
  }

  ngOnInit() {
    this.getlista;
  }

}
