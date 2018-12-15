import { Injectable } from '@angular/core';
import { User } from '../user';
import { Http, Headers, RequestOptions }from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Local LARAVEL server
//server = 'http://babawandemovies.com/api/';
server = 'http://localhost:8000/';

headers: Headers = new Headers;
options: any;
model: User;

  constructor(private _http:Http, private httpClient: HttpClient) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new RequestOptions({ headers: this.headers });
  }

  indexUsers(){
    return this._http.post(this.server+'indexUser', null, this.options).map(
              res=> res.json()
            );
  }

  addUser(info){
    var data = JSON.stringify(info);
    return this._http.post(this.server+'addUser', data, this.options).map(
              res=> res.json()
            );
  }

  sendFile(formData: any){
    let url = this.server + 'addUserPicture';
          return this.httpClient.post(url,formData/*, {responseType: 'text'}*/);
  }

  sendGallery(formData: any){
    let url = this.server + 'addUserGallery';
          return this.httpClient.post(url,formData, {responseType: 'text'});
  }
  addUserPicture(info){
    var data = info;
    return this._http.post(this.server+'addUserPicture', data, this.options).map(
              res=> res.json()
            );
  }

  showUser(info){
    var data = info;
    return this._http.post(this.server+'showUser', data, this.options).map(
              res=> res.json()
            );
  }

  getUser(info){
    var data = info;
    return this._http.post(this.server+'getUser', data, this.options).map(
              res=> res.json()
            );
  }

  editUser(info){
    var data = JSON.stringify(info);
    return this._http.post(this.server+'updateUser', data, this.options).map(
              res=> res.json()
            );
  }

  deleteUser(info){
    var data = JSON.stringify(info);

    return this._http.post(this.server+'destroyUser', data, this.options).map(
              res=> res.json()
            );
  }

  removePic(info){
    var data = info;
    let url = this.server + 'removePic';
    return this.httpClient.post(url,data/*, {responseType: 'text'}*/);
  }

  subs(info){
    var data = info;
    let url = this.server + 'subscribe';
    return this.httpClient.post(url,data/*, {responseType: 'text'}*/);
  }
}
