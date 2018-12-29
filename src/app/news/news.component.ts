import { Component, OnInit } from '@angular/core';
import { News } from './../news';
import { NewsService } from './../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  page_title = 'NEWS';

  constructor(private newsService: NewsService) {
    this.index();
  }


  news: Array<News>;

    index() {
      this.newsService.indexNews()
        .subscribe(response => {
          this.news = response;
        });
    }


}
