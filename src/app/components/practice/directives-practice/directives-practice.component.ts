import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-practice',
  templateUrl: './directives-practice.component.html',
  styleUrls: ['./directives-practice.component.scss']
})
export class DirectivesPracticeComponent implements OnInit {
  Weekdays = [
    'Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday']
  styleOne = true;

  people: any[] = [
    {
      "name": "RATAN",
      "country": 'INDIA'
    },
    {
      "name": "SATISH",
      "country": 'USA'
    },
    {
      "name": "PRAVIN",
      "country": 'UK'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  change() {
    if (this.styleOne) {
      this.styleOne = false
    } else {
      this.styleOne = true;
    }
  }
}
