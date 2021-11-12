import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileDataService } from './services/file-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public data: FileDataService, private router: Router) {


  }
}
