import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RechercheService } from './Recherche.service';

@Component({
	selector: 'menu',
	templateUrl: 'templates/rechercheMarques.html',
	styleUrls: ['styles/menu.css']
})

export class RechercheMarquesComponent {
public items :any;
       public constructor(private recherche :RechercheService) {}

  ngOnInit() {
       		  
                    this.recherche.getJSON("marques")
		    .subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));

}
}
