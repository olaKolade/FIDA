import { Injectable } from '@angular/core';
import { Event } from '../event';
import { Http, Headers, RequestOptions }from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  //Local LARAVEL server
//server = 'http://babawandemovies.com/api/';
server = 'http://localhost:8000/';

headers: Headers = new Headers;
options: any;
model: Event;

  constructor(
    private _http:Http, private httpClient: HttpClient
  ) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new RequestOptions({ headers: this.headers });
  }

  indexEvent(){
    return this._http.post(this.server+'indexEvent', null, this.options).map(
              res=> res.json()
            );
  }

  addEvent(info){
    var data = JSON.stringify(info);
    return this._http.post(this.server+'addEvent', data, this.options).map(
              res=> res.json()
            );
  }

  showEvent(info){
    var data = info;
    return this._http.post(this.server+'showEvent', data, this.options).map(
              res=> res.json()
            );
  }

  getEvent(info){
    var data = info;
    return this._http.post(this.server+'getEvent', data, this.options).map(
              res=> res.json()
            );
  }

  editEvent(info){
    var data = JSON.stringify(info);
    return this._http.post(this.server+'updateEvent', data, this.options).map(
              res=> res.json()
            );
  }

  deleteEvent(info){
    var data = JSON.stringify(info);

    return this._http.post(this.server+'destroyEvent', data, this.options).map(
              res=> res.json()
            );
  }
  sendFile(formData: any){
    let url = this.server + 'addEventPicture';
          return this.httpClient.post(url,formData/*, {responseType: 'text'}*/);
  }

}
