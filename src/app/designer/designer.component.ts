import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {
  page_title: string = 'DESIGNERS';
  constructor() { }

  ngOnInit() {
  }

}