import { Injectable } from '@angular/core';
import { User } from '../user';
import { Http, Headers, RequestOptions }from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Local LARAVEL server
server = 'http://localhost:8000/';

headers: Headers = new Headers;
options: any;
model: User;

  constructor(private _http:Http) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new RequestOptions({ headers: this.headers });
  }

  index(){
    return this._http.post(this.server+'index', null, this.options).map(
              res=> res.json()
            );
  }

  addUser(info){
    var data = JSON.stringify(info);
    console.log(data);
    return this._http.post(this.server+'addUser', data, this.options).map(
              res=> res.json()
            );
  }

  showUser(info){
    //var data = JSON.stringify(info);
    var data = info;
    //console.log(data);
    return this._http.post(this.server+'showUser', data, this.options).map(
              res=> res.json()
            );
  }

  getUser(info){
    //var data = JSON.stringify(info);
    var data = info;
    //console.log(data);
    return this._http.post(this.server+'getUser', data, this.options).map(
              res=> res.json()
            );
  }

  editUser(info){
    var data = JSON.stringify(info);
    console.log(data);
    return this._http.post(this.server+'update', data, this.options).map(
              res=> res.json()
            );
  }

  deleteUser(info){
    var data = JSON.stringify(info);
    console.log(data);

    return this._http.post(this.server+'destroy', data, this.options).map(
              res=> res.json()
            );
  }
}
