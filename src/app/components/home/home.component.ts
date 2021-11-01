import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileDataService } from 'src/app/services/file-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private data: FileDataService) {
  }

  ngOnInit(): void {
  }

}
