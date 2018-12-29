import {
  Component
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cal',
  templateUrl: './calend.component.html',
  styleUrls: ['./calend.component.css']
})
export class CalendAComponent {
  public adminValue: string;
    constructor(private router: Router) {
      this.adminValue = sessionStorage.getItem('admin');
      if (this.adminValue !== 'true') {
        this.router.navigate(['/designer'], {queryParams: {login: 0}});
      }
    }
}
