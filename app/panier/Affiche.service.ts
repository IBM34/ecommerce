import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AfficheService {
       constructor(private http :Http) {}

       getJSON(parametres :string) :Observable<any> {
       		  let url :string = "http://localhost:7040/panier/"+parametres;
		  let observable :Observable<any> =  this.http.get(url).map((res:Response) => res.json());
		  return observable;
		  }
}
