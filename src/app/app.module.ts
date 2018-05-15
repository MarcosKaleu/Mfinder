import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NovaTelaComponent } from './nova-tela/nova-tela.component';
import { AppRoutingModule } from './/app-routing.module';
import { TelaMarceloComponent } from './tela-marcelo/tela-marcelo.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { ServicesService } from './services/services.service';


@NgModule({
  declarations: [
    AppComponent,
    NovaTelaComponent,
    TelaMarceloComponent,
    TelaLoginComponent
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
