import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routingRecherche, appRoutingProviders }  from './app.routing';
import { RechercheService }  from './Recherche.service';
import { MenuRechercheComponent } from './Menu.component';
import { AjoutAuPanierComponent} from './AjoutAuPanier.component';
import { RechercheComponent} from './Recherche.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule,routingRecherche],
  declarations: [ MenuRechercheComponent, AjoutAuPanierComponent,RechercheComponent],
  providers:    [ RechercheService ],
  bootstrap:    [ MenuRechercheComponent ]
})
export class RechercheModule { }
