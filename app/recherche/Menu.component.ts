import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RechercheService } from './Recherche.service';

@Component({
	selector: 'menu',
	templateUrl: 'templates/menuRecherche.html',
	styleUrls: ['styles/menu.css']
	})

export class MenuRechercheComponent{
       titre = 'Recherche sur les produits';
       marque :string;
       type :string;
       nom :string;
      prixmin :number = 0;
      prixmax :number = 1000;
       setMarque(value :string){
       		       this.marque=value;
       }
       setType(value :string){
       this.type=value;
	}
       setNom(value :string){
       this.nom=value;
       }
    
public items :any;
       public constructor(private recherche :RechercheService) {}

  ngOnInit() {
       		  
                    this.recherche.getJSON("paramRecherche")
		    .subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));

}
	 
}
