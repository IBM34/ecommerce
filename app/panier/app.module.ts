import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routingPanier, appRoutingProviders}  from './app.routing';
import { AfficheService }  from './Affiche.service';
import { AffichePanierComponent } from './AffichePanier.component';
import { RetirePanierComponent } from './RetirePanier.component';
import { AugmenterQuantiteComponent } from './AugmenterQuantite.component';
import { ReduireQuantiteComponent } from './ReduireQuantite.component';


@NgModule({
  imports:      [BrowserModule, HttpModule, routingPanier],
  declarations: [AffichePanierComponent, RetirePanierComponent,AugmenterQuantiteComponent,ReduireQuantiteComponent],
  providers:    [AfficheService],
  bootstrap:    [ AffichePanierComponent ]

})
export class PanierModule { }
