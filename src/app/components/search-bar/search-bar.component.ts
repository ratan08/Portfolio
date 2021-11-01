import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  logout() {
    localStorage.setItem("loginAuth", 'false');
    this.route.navigateByUrl('auth');
  }
}
