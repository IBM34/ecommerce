import {Component} from '@angular/core';

@Component({
	selector: 'menu',
	templateUrl: 'templates/menu.html',
	styleUrls: ['styles/menu.css']
	})

export class MenuComponent{
       titre = 'Recherche sur les produits';
       marque :string = 'Apple';
       type :string = 'telephone';
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

			 setPrixmin(value :number){
					 	      this.prixmin=value;
			 }

			 setPrixmax(value :number){
					 	      this.prixmax=value;
			 }

			 



	}
