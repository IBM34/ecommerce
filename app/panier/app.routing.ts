import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AffichePanierComponent} from './AffichePanier.component';
import {RetirePanierComponent} from './RetirePanier.component';


const appRoutes: Routes = [
{ path: 'AffichePanier', component: AffichePanierComponent },
{ path: 'retirerPanier/:id', component: RetirePanierComponent}
];








export const appRoutingProviders: any[] = [ ];

export const routingPanier: ModuleWithProviders = RouterModule.forChild(appRoutes);
