import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NovaTelaComponent } from './nova-tela/nova-tela.component';
import { AppRoutingModule } from './/app-routing.module';
import { TelaMarceloComponent } from './tela-marcelo/tela-marcelo.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';


@NgModule({
  declarations: [
    AppComponent,
    NovaTelaComponent,
    TelaMarceloComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
