import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.component.html',
  styleUrls: ['./signup3.component.css']
})
export class Signup3Component {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
   }
      public id = this.route.snapshot.paramMap.get('id');

  reroute: string;
  selectedFile: File = null;
  urls = new Array<string>();
  filesToUpload: Array<File> = [];

  onFileSelected(event: any) {

    const files = event.target.files;
    if (files) {
      for (const file of files) {
        if (file.size > 2097152) {
          alert('The selected file is greater than 2MB, Please select another one');
      } else {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    }
    if (event.target.files[0].size < 2097152) {
      this.filesToUpload.push(event.target.files[0]);
    }

  }
  onUpload() {
    const formData = new FormData();
        const files: Array<File> = this.filesToUpload;

        for (let i = 0; i < files.length; i++) {
          formData.append('image[]', <File>files[i], files[i]['name']);
        }
        this.userService.sendGallery(formData)
        .subscribe(response => {
          this.reroute = '/designer/' + this.id;
           this.router.navigate([this.reroute]);

        });
  }

}
