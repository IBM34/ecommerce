import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AfficheService } from './Affiche.service';


@Component({
	templateUrl: 'templates/AffichePanier.html',
	styleUrls: ['styles/menu.css']
})


export class AffichePanierComponent {
titre = 'Votre Panier';
total = 0;

public items :any;
       public constructor(private recherche :AfficheService) {}

  ngOnInit() {
       		  
                    this.recherche.getJSON("ids")
		    .subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));

}
}
