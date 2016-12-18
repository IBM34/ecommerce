import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RechercheService } from './Recherche.service';

@Component({
selector: 'menu',
templateUrl: 'templates/rechercheParMarquePop.html',
styleUrls: ['styles/menu.css']
})

export class RechercheParMarquePopComponent {
public items :any;
       public constructor(private recherche :RechercheService, private route: ActivatedRoute) {}

       ngOnInit() {
       		  this.route.params.subscribe(params => {
                    this.recherche.getJSON("parMarquePrix/"+params['marque']+"/"+params['prixmin']+"/"+params['prixmax'])
			.subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));

});
}
}
