import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AjoutAuPanierComponent} from './AjoutAuPanier.component';
import {RechercheComponent} from './Recherche.component';


const appRoutes: Routes = [
{ path: 'ajoutPanier/:id', component: AjoutAuPanierComponent},
{ path: 'recherche/:nom/:marque/:type', component: RechercheComponent}
];

export const appRoutingProviders: any[] = [ ];

export const routingRecherche: ModuleWithProviders = RouterModule.forChild(appRoutes);
