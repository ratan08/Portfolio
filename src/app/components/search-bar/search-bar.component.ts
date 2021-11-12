import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FileDataService } from 'src/app/services/file-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  home;
  constructor(private route: Router, private data: FileDataService) { }


  ngOnInit() {

  }
  logout() {
    localStorage.setItem("loginAuth", 'false');

    this.data.logIn = 'false'
    this.route.navigateByUrl('login');

  }
}
