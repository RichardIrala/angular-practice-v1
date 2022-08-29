import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',

  template: `
  <mat-toolbar color="primary">
    <span>Mi aplicación web Richard Irala</span>
  </mat-toolbar>`,

  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
