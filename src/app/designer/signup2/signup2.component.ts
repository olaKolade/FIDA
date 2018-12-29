import { Component } from '@angular/core';
import { User } from './../../user';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from './../../services/user.service';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component{

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
   }
      public id = this.route.snapshot.paramMap.get('id');
      public responseId;
  reroute: string;
  selectedFile: File = null;

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];

  }
  onUpload(event) {
        const formData = new FormData();
        formData.append('image', this.selectedFile, this.selectedFile.name);
        if (this.selectedFile.type.substr(0, 5) !== 'image') {
          alert('The selected file is not an image');
        } else if (this.selectedFile.size > 2097152) {
            alert('The selected file is greater than 2MB');
        } else {
          alert('Please wait, your file is being uploaded');
          this.userService.sendFile(formData)
          .subscribe(response => {
            this.reroute = '/designer/signup-3/' + this.id;
            if (response) {
              this.router.navigate([this.reroute]);
            } else {
              this.router.navigate([this.reroute]);
            }
          });
        }
  }
}
