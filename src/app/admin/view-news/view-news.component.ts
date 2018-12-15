import { Component, OnInit } from '@angular/core';
import { News } from './../../news';

import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { NewsService } from './../../services/news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit{
  news= new News;
  selectedFile: File = null;
  returnedRes = true;
  public adminValue: string;
  returnedMess;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ){
    this.adminValue = sessionStorage.getItem('admin');
    if(this.adminValue !== 'true'){
      this.router.navigate(['/designer'], {queryParams: {login: 0}});
    }
  }


  ngOnInit(){
    this.showNews();
  }

    showNews(){
      const id = +this.route.snapshot.paramMap.get('id');
      this.newsService
        .showNews({id: id})
        .subscribe(response => {
          this.news = response['news'];
        })
    }

    delete(){
      const id = +this.route.snapshot.paramMap.get('id');
      this.newsService
        .deleteNews({id: id})
        .subscribe(response => {
          if(response.success){
            this.router.navigate(['/admin/newsIndex']);
          } else {
            this.returnedRes = response.success;
            this.returnedMess = response.response;
          }
        })
    }

    onFileSelected(event){
      this.selectedFile = <File>event.target.files[0];

    }
    onUpload(event){
          const formData = new FormData();
          formData.append('image', this.selectedFile, this.selectedFile.name);
          console.log(this.selectedFile.name);
          this.newsService.sendFile(formData)
          .subscribe(response => {
            if(response){
              window.location.reload();
            } else {
              window.location.reload();
            }
          });
    }

}
