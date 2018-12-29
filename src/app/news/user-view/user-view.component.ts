import { Component, OnInit } from '@angular/core';
import { News } from './../../news';

import { ActivatedRoute } from '@angular/router';

import { NewsService } from './../../services/news.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  news = new News;
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.showNews();
  }

    showNews() {
      const id = +this.route.snapshot.paramMap.get('id');
      this.newsService
        .showNews({id: id})
        .subscribe(response => {
          this.news = response.news;
        });
    }
}
