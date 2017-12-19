import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    constructor(private http : Http){};
    showUsers(){
         return this.http.get('https://jsonplaceholder.typicode.com/users').map((res) =>{
         return res.json()
         });
    }
}