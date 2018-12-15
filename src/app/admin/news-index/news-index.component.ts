import { Component, OnInit } from '@angular/core';
import { News } from './../../news';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { NewsService } from './../../services/news.service';

@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.css']
})
export class NewsIndexComponent{
  public adminValue: string;
  constructor(
    private router: Router,
    private newsService: NewsService
  ){
    this.adminValue = sessionStorage.getItem('admin');
    if(this.adminValue !== 'true'){
      this.router.navigate(['/designer'], {queryParams: {login: 0}});
    }
    this.index();
  }


  news: Array<object>;
  returnedRes = true;
  returnedMess;

    index(){
      this.newsService
        .indexNews()
        .subscribe(response => {
          this.news = response;
        })
    }

    delete(id){
      this.newsService
        .deleteNews({id: id})
        .subscribe(response => {
          if(response.success){
            window.location.reload();
          } else {
            this.returnedRes = response.success;
            this.returnedMess = response.response;
          }
        })
    }

}
