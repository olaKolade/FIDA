import { Component, OnInit } from '@angular/core';
import { News } from './../../news';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { NewsService } from './../../services/news.service';

import { Observable }     from 'rxjs/Observable';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit{
  public adminValue: string;
  constructor(
    private router: Router,
    private newsService: NewsService, private _http: Http
  ){
    this.adminValue = sessionStorage.getItem('admin');
    if(this.adminValue !== 'true'){
      this.router.navigate(['/designer'], {queryParams: {login: 0}});
    }
  }


  headers: Headers = new Headers;

  ngOnInit() {
 }

    news = new News();
    success = false;
    error = false;
    resMes: string;
    submitted = false;
    route: string;

    onSubmit() {
      this.submitted = true;
      this.add();
    }

    add(){
      this.newsService
        .addNews(this.news)
        .subscribe(response => {
          this.route = '/admin/viewNews/' + response.id;
          if(response.success){
            this.router.navigate([this.route]);
          } else {
            this.error = true;
            this.resMes = response.response;
          }
        });
    }
}
