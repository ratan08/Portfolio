import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logIn;
  constructor() {
    this.logIn = localStorage.getItem("loginAuth");
    console.log(this.logIn);
  }
}
