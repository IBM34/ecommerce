import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routingRecherche, appRoutingProviders }  from './app.routing';
import { RechercheService }  from './Recherche.service';
import { MenuComponent } from './Menu.component';
import { RechercheMarquesComponent } from './RechercheMarques.component';
import { RechercheTypesComponent} from './RechercheTypes.component';
import { RechercheParMarqueComponent } from './RechercheParMarque.component';
import { RechercheParMarquePopComponent } from './RechercheParMarquePop.component';
import { RechercheParTypeComponent } from './RechercheParType.component';
import { AjoutAuPanierComponent} from './AjoutAuPanier.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule,routingRecherche],
  declarations: [ MenuComponent,RechercheMarquesComponent,RechercheTypesComponent,RechercheParMarqueComponent, RechercheParMarquePopComponent, RechercheParTypeComponent,
  AjoutAuPanierComponent],
  providers:    [RechercheService],
  bootstrap:    [ MenuComponent ],
  exports:       [MenuComponent]
})
export class RechercheModule { }
