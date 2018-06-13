export class Dados{
	

	email: string
	senha: string
	repetirsenha: string
	cnpj: string
	cep: string


   constructor(

     	email: string,
     	senha: string,
        repetirsenha: string,  
	cnpj: string,
	cep: string
){

	this.email= email
	this.senha= senha
	this.repetirsenha= repetirsenha
	this.cnpj= cnpj
	this.cep= cep
}


}
