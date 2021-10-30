import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-practice',
  templateUrl: './template-practice.component.html',
  styleUrls: ['./template-practice.component.scss']
})
export class TemplatePracticeComponent implements OnInit {
  clickMessage: any;
  binding = "";
  firstName: string = "Ratan";
  lastName: string = "Chaurasiya";
  name = "red";
  constructor() { }

  ngOnInit(): void {
  }

}
