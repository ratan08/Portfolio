import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  task = [
    {
      url: '/registration',
      name: 'Registration Form',
      date: '14/10/2021'
    },
    {
      url: '/tictactoe',
      name: 'Tictactoe Game',
      date: '21/10/2021'
    },
    {
      url: '/todo',
      name: 'TODO List',
      date: '21/10/2021'
    }
  ];
  practice = [
    {
      name: 'demo',
      date: '24/10/2021'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  open(url) {
    this.router.navigateByUrl(url);
  }

}
