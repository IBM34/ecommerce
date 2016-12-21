import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RechercheService } from './Recherche.service';

@Component({
	template: '<br/><br/><h2> Le produit à été ajouté au panier</h2>',
	styleUrls: ['styles/menu.css']
})

export class AjoutAuPanierComponent {
public items :any;
       public constructor(private recherche :RechercheService, private route: ActivatedRoute) {}

  ngOnInit() {
	      
              this.route.params.subscribe(params =>{
                    this.recherche.getJSON("ajout/"+params['id'])
		    .subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));
                         })
                         }
                         }
