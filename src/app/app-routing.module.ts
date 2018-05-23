import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaMarceloComponent } from './tela-marcelo/tela-marcelo.component';
import { NovaTelaComponent } from './nova-tela/nova-tela.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { Marcelo2Component } from './marcelo2/marcelo2.component';

const routes: Routes = [
  { path: '', redirectTo: '/tela-marcelo', pathMatch: 'full' },
  { path: 'tela-marcelo', component: TelaMarceloComponent },
  { path: 'nova-tela', component: NovaTelaComponent },
  { path: 'login', component: TelaLoginComponent },
  { path: 'marcelo2', component: Marcelo2Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
