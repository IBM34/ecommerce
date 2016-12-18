import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AfficheService } from '../panier/Affiche.service';

@Component({
	selector: 'menu',
	templateUrl: 'templates/AffichePanier.html',
	styleUrls: ['styles/menu.css']
})

export class AjoutAuPanierComponent {
public items :any;
       public constructor(private recherche :AfficheService, private route: ActivatedRoute) {}

  ngOnInit() {

              this.route.params.subscribe(params =>{
                    this.recherche.getJSON("ajout/"+params['id'])
		    .subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));
                         })
                         }
                         }
