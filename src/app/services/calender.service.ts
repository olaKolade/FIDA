import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions }from '@angular/http';
import  'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  //Local LARAVEL server
//server = 'http://babawandemovies.com/api/';
server = 'http://localhost:8000/';

headers: Headers = new Headers;
options: any;

  constructor(
    private _http:Http, private httpClient: HttpClient
  ) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new RequestOptions({ headers: this.headers });
  }

  indexCalendar(){
    return this._http.post(this.server+'indexCalendar', null, this.options).map(
              res=> res.json()
            );
  }

  addCalendar(info){
    return this._http.post(this.server+'addCalendar', info, this.options).map(
              res=> res.json()
            );
  }

  editCalendar(info){
    return this._http.post(this.server+'updateCalendar', info, this.options).map(
              res=> res.json()
            );
  }

  deleteCalendar(info){
    var data = JSON.stringify(info);

    return this._http.post(this.server+'destroyCalendar', data, this.options).map(
              res=> res.json()
            );
  }

}
