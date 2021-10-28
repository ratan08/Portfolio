import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-dailog',
  templateUrl: './detail-dailog.component.html',
  styleUrls: ['./detail-dailog.component.scss']
})
export class DetailDailogComponent implements OnInit {

  userData: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.userData = this.data;
  }
}
