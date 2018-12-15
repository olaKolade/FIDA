import { Component, OnInit } from '@angular/core';
import { User } from './../../user';

import { Location } from '@angular/common';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user= new User;
  selectedFile: File = null;
  public urlsU;
  returnedUser = new User();
  urls = new Array<string>();
  filesToUpload: Array<File> = [];
  public loggedInValue: string;

  public reroute: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ){
    this.loggedInValue = sessionStorage.getItem('loggedInValue');
    if(this.loggedInValue !== 'true'){
      this.router.navigate(['/designer'], {queryParams: {login: 0}});
    }
  }

  public id = +this.route.snapshot.paramMap.get('id');
  ngOnInit(){
    this.showUser();
  }

  showUser(){
      this.userService
      .showUser({id: this.id})
      .subscribe(response => {
      if(response.success){
        this.user = response['user'];
      } else {
        console.log(response.response);
      }
        /*while(_this.user.gallery.charAt(0) === '|')
           {
            _this.user.gallery = _this.user.gallery.substr(1);
           }
           if (_this.user.gallery.length >= 1){
           _this.urlsU  = _this.user.gallery.split("|");
           }
           */
      })
  }


  onSubmit(){
    this.editUser();
  }

  editUser(){
    this.userService
      .editUser(this.user)
      .subscribe(response => {
        if(response.success){
          this.returnedUser = response.user;
          this.reroute = '/designer/' + this.returnedUser.id;
          this.router.navigate([this.reroute]);
        }
      });
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload(event){
    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);

    this.userService.sendFile(formData)
    .subscribe(response => {
      this.reroute = '/designer/' + this.id;
      if(response){
        this.router.navigate([this.reroute])
      } else {
        console.log("User not added" );
      }
    });
  }

  removePic(data){
    this.userService.removePic({picture: data})
    .subscribe(response => {
      window.location.reload();
    });
  }

  onGallerySelected(event: any){
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
    this.filesToUpload.push(event.target.files[0]);

  }
  onUploadG(){
    const formData = new FormData();
        const files: Array<File> = this.filesToUpload;

        for(let i =0; i < files.length; i++){
          formData.append('image[]', <File>files[i], files[i]['name']);
        }
        this.userService.sendGallery(formData)
        .subscribe(response => {
          this.reroute = '/designer/' + this.id;
           this.router.navigate([this.reroute]);
        });
  }
}
