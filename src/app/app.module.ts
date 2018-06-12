import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NovaTelaComponent } from './nova-tela/nova-tela.component';
import { AppRoutingModule } from './/app-routing.module';
import { TelaMarceloComponent } from './tela-marcelo/tela-marcelo.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { ServicesService } from './services/services.service';
import { Marcelo2Component } from './marcelo2/marcelo2.component';
import { TelaCarrinhoComponent } from './tela-carrinho/tela-carrinho.component';
import { Marcelo3Component } from './marcelo3/marcelo3.component';


@NgModule({
  declarations: [
    AppComponent,
    NovaTelaComponent,
    TelaMarceloComponent,
    TelaLoginComponent,
    Marcelo2Component,
    TelaCarrinhoComponent,
    Marcelo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
