import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Http, Response, Headers, RequestOptions} from '@angular/http';


@Injectable()
export class LoginService{

    constructor(private http: Http){}

    login(params: any): Observable<any>{//"Content-Type":"application/x-www-form-urlencoded;charset=uf-8"
        return new Observable();
    }

}
