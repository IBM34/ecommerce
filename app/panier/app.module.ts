import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routingPanier, appRoutingProviders}  from './app.routing';


import { AfficheService }  from './Affiche.service';
import { MenuComponent } from './Menu.component';
import { AffichePanierComponent } from './AffichePanier.component';
import { RetirePanierComponent } from './RetirePanier.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, routingPanier],
  declarations: [ MenuComponent,AffichePanierComponent, RetirePanierComponent],
  providers:    [AfficheService],
  bootstrap:    [ MenuComponent ],
  exports:      [ MenuComponent ]
})
export class PanierModule { }
