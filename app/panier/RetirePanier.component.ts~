import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AfficheService } from './Affiche.service';

@Component({
	templateUrl: 'templates/AffichePanier.html',
	styleUrls: ['styles/menu.css']
})

export class RetirePanierComponent {
public items :any;
       public constructor(private recherche :AfficheService, private route: ActivatedRoute) {}

  ngOnInit() {

              this.route.params.subscribe(params =>{
                    this.recherche.getJSON("retire/"+params['id'])
		    .subscribe(res => this.items = res,
       				       err => console.error(err),
       				       	   () => console.log('done'));
                         })
                         }
                         }
