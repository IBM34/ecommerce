import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AfficheService } from './Affiche.service';

@Component({
	template: '<br/><br/><h2> Le produit à été retiré du panier</h2>',
	styleUrls: ['styles/menu.css']
})

export class RetirePanierComponent {
titre = 'Votre Panier';
public items :any;
       public constructor(private recherche :AfficheService, private route: ActivatedRoute) {}

  ngOnInit() {

              this.route.params.subscribe(params =>{
                    this.recherche.getJSON("retire/"+params['id'])
		    .subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));
                         })
                         }
                         }
