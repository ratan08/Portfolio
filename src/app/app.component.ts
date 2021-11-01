import { Component } from '@angular/core';
import { FileDataService } from './services/file-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public data: FileDataService) {

  }
}
