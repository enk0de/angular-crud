import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
      max-width: 1000px;
      padding-top: 15px;
      margin: 0 auto;
    }
  `]
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
