import { Component} from '@angular/core';
import { NgModel} from '@angular/forms';
import { Dados } from '../Dados';
import { stringify } from '@angular/compiler/src/util';
import { constructDependencies } from '@angular/core/src/di/reflective_provider'; 

@Component({
  selector: 'app-marcelo2',
  templateUrl: './marcelo2.component.html',
  styleUrls: ['./marcelo2.component.css']
})

export class Marcelo2Component {

email
senha
repetirsenha
cnpj
cep
dados: Dados
vetor = []
verifica :number = 1000




SalvarDados(){

 var chavedata = new Date()
 var time = chavedata.getTime()
 var chave: string = time.toString()
 
  this.dados = new Dados(
	

	this.email,
	this.senha,
	this.repetirsenha,
	this.cnpj,
	this.cep

);

	localStorage.setItem(chave,JSON.stringify(this.dados));
	
	this.email= null
	this.senha = null
	this.repetirsenha = null
	this.cnpj= null
	this.cep = null
}

}
