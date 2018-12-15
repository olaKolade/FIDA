import { Component, OnInit } from '@angular/core';
import { Event } from './../../event';

import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { EventService } from './../../services/event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit{
  event= new Event;
  selectedFile: File = null;
  public adminValue: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ){
    this.adminValue = sessionStorage.getItem('admin');
    if(this.adminValue !== 'true'){
      this.router.navigate(['/designer'], {queryParams: {login: 0}});
    }
  }


  ngOnInit(){
    this.showEvent();
  }

    showEvent(){
      const id = +this.route.snapshot.paramMap.get('id');
      this.eventService
        .showEvent({id: id})
        .subscribe(response => {
          this.event = response['event'];
        })
    }

    delete(){
      const id = +this.route.snapshot.paramMap.get('id');
      this.eventService
        .deleteEvent({id: id})
        .subscribe(response => {
          if(response.success){
            this.router.navigate(['/admin/event']);
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
          this.eventService.sendFile(formData)
          .subscribe(response => {
            if(response){
              window.location.reload();
            } else {
              window.location.reload();
            }
          });
    }

}
