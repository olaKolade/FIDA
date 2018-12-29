import { Injectable } from '@angular/core';
import { User } from '../user';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Local LARAVEL server
// server = 'http://babawandemovies.com/back/';
server = 'http://localhost:8000/';

headers: Headers = new Headers;
options: any;
model: User;

  constructor(private _http: Http, private httpClient: HttpClient) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new RequestOptions({ headers: this.headers });
  }

  indexUsers() {
    return this._http.post(this.server + 'indexUser', null, this.options).map(
              res => res.json()
            );
  }

  addUser(info) {
    const data = JSON.stringify(info);
    return this._http.post(this.server + 'addUser', data, this.options).map(
              res => res.json()
            );
  }

  sendFile(formData: any) {
    const url = this.server + 'addUserPicture';
          return this.httpClient.post(url, formData/*, {responseType: 'text'}*/);
  }

  sendGallery(formData: any) {
    const url = this.server + 'addUserGallery';
          return this.httpClient.post(url, formData, {responseType: 'text'});
  }
  addUserPicture(info) {
    const data = info;
    return this._http.post(this.server + 'addUserPicture', data, this.options).map(
              res => res.json()
            );
  }

  showUser(info) {
    const data = info;
    return this._http.post(this.server + 'showUser', data, this.options).map(
              res => res.json()
            );
  }

  getUser(info) {
    const data = info;
    return this._http.post(this.server + 'getUser', data, this.options).map(
              res => res.json()
            );
  }

  editUser(info) {
    const data = JSON.stringify(info);
    return this._http.post(this.server + 'updateUser', data, this.options).map(
              res => res.json()
            );
  }

  resetUserPass (info) {
    const data = info;
    return this._http.post(this.server + 'reset', data, this.options).map(
              res => res.json()
            );
  }

  deleteUser(info) {
    const data = JSON.stringify(info);

    return this._http.post(this.server + 'destroyUser', data, this.options).map(
              res => res.json()
            );
  }

  removePic(info) {
    const data = info;
    const url = this.server + 'removePic';
    return this.httpClient.post(url, data/*, {responseType: 'text'}*/);
  }

  subs(info) {
    const data = info;
    const url = this.server + 'subscribe';
    return this.httpClient.post(url, data/*, {responseType: 'text'}*/);
  }
}
