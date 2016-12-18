import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RechercheMarquesComponent} from './RechercheMarques.component';
import {RechercheTypesComponent} from './RechercheTypes.component';
import {RechercheParMarqueComponent} from './RechercheParMarque.component';
import {RechercheParTypeComponent} from './RechercheParType.component';
import {RechercheParMarquePopComponent} from './RechercheParMarquePop.component';
import {AjoutAuPanierComponent} from './AjoutAuPanier.component';

const appRoutes: Routes = [
{ path: 'rechercheMarques', component: RechercheMarquesComponent },
{ path: 'rechercheTypes', component: RechercheTypesComponent },
{ path: 'rechercheParMarque/:marque', component: RechercheParMarqueComponent },
{ path: 'rechercheParType/:type', component: RechercheParTypeComponent },
{ path: 'parMarquePrix/:marque/:prixmin/:prixmax', component: RechercheParMarquePopComponent },
{ path: 'ajoutPanier/:id', component: AjoutAuPanierComponent}
];

export const appRoutingProviders: any[] = [ ];

export const routingRecherche: ModuleWithProviders = RouterModule.forChild(appRoutes);
