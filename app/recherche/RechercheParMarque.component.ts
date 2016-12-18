import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RechercheService } from './Recherche.service';

@Component({
selector: 'menu',
templateUrl: 'templates/rechercheParMarque.html',
styleUrls: ['styles/menu.css']
})

export class RechercheParMarqueComponent {
public items :any;
       public constructor(private recherche :RechercheService, private route: ActivatedRoute) {}

       ngOnInit() {
       		  this.route.params.subscribe(params => {
                    this.recherche.getJSON("marque/"+params['marque'])
			.subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));

});
}
}
