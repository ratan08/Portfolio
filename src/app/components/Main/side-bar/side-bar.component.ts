import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileDataService } from 'src/app/services/file-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router, public data: FileDataService) { }

  ngOnInit(): void {
  }
  open(url) {
    this.router.navigateByUrl(url);
  }

}
