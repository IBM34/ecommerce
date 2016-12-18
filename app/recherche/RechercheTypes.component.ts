import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RechercheService } from './Recherche.service';

@Component({
selector: 'menu',
templateUrl: 'templates/rechercheTypes.html',
styleUrls: ['styles/menu.css']
})

export class RechercheTypesComponent {
public items :any;
       public constructor(private recherche :RechercheService) {}
       
       ngOnInit() {
       
        this.recherche.getJSON("types")
		    .subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));

}
}
