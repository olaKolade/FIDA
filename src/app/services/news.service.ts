import { Injectable } from '@angular/core';
import { News } from '../news';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // Local LARAVEL server
// server = 'http://babawandemovies.com/back/';
server = 'http://localhost:8000/';

headers: Headers = new Headers;
options: any;
model: News;

  constructor(
    private _http: Http, private httpClient: HttpClient
  ) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new RequestOptions({ headers: this.headers });
  }

  indexNews() {
    return this._http.post(this.server + 'indexNews', null, this.options).map(
              res => res.json()
            );
  }

  addNews(info) {
    const data = JSON.stringify(info);
    return this._http.post(this.server + 'addNews', data, this.options).map(
              res => res.json()
            );
  }

  showNews(info) {
    const data = info;
    return this._http.post(this.server + 'showNews', data, this.options).map(
              res => res.json()
            );
  }

  getNews(info) {
    const data = info;
    return this._http.post(this.server + 'getNews', data, this.options).map(
              res => res.json()
            );
  }

  editNews(info) {
    const data = JSON.stringify(info);
    return this._http.post(this.server + 'updateNews', data, this.options).map(
              res => res.json()
            );
  }

  deleteNews(info) {
    const data = JSON.stringify(info);

    return this._http.post(this.server + 'destroyNews', data, this.options).map(
              res => res.json()
            );
  }
  sendFile(formData: any) {
    const url = this.server + 'addNewsPicture';
          return this.httpClient.post(url, formData/*, {responseType: 'text'}*/);
  }

}
