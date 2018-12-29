import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-a',
  templateUrl: './login-a.component.html',
  styleUrls: ['./login-a.component.css']
})
export class LoginAComponent implements OnInit {
   constructor(private router: Router) { }

  user = new User();
    returnedRes = false;
    returnedMess;
    returnedUser = new User();
    submitted = false;
    route: string;
  ngOnInit() {
  }

    onSubmit() {
      this.submitted = true;
      if (this.user.email === 'admin') {
        if (this.user.password === '12FidaAdmin34') {
          sessionStorage.setItem('admin', 'true');
          this.router.navigate(['/admin/index']);
        } else {
          this.returnedRes = true;
          this.returnedMess = 'Invalid Password';
        }
      } else {
        this.returnedRes = true;
        this.returnedMess = 'Invalid Username';
      }
    }

}
