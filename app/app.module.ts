import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {RechercheModule}  from './recherche/app.module';
import {PanierModule}  from './panier/app.module';

import {routingRecherche} from './recherche/app.routing';
import {routingPanier} from './panier/app.routing';
import { routing, appRoutingProviders}  from './app.routing';
import { PrincipalComponent } from './Principal.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, RechercheModule, PanierModule, routing, routingRecherche, routingPanier],
  declarations: [PrincipalComponent],
  bootstrap:    [PrincipalComponent]
})
export class ModulePrincipal { }
