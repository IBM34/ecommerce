import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RechercheService } from './Recherche.service';

@Component({
selector: 'menu',
templateUrl: 'templates/rechercheParType.html',
styleUrls: ['styles/menu.css']
})

export class RechercheParTypeComponent {
public items :any;
       public constructor(private recherche :RechercheService, private route: ActivatedRoute) {}
       
       ngOnInit() {
       		  this.route.params.subscribe(params => {
                    this.recherche.getJSON("type/"+params['type'])
			.subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));
       
});
}
}
