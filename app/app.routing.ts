import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {routingRecherche}  from './recherche/app.routing';
import {routingPanier}  from './panier/app.routing';


const appRoutes: Routes = [

];

export const appRoutingProviders: any[] = [ ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
