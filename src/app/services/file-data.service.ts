import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FileDataService {
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
      url: '/rxjs',
      name: 'Rxjs Practice',
      date: '9/11/2021'
    },
    {
      url: '/http',
      name: 'Http Practice',
      date: '8/11/2021'
    },
    {
      url: '/directives-practice',
      name: 'Directives Practice',
      date: '27/10/2021'
    },
    {
      url: '/template-practice',
      name: 'Template Practice',
      date: '26/10/2021'
    },
    {
      url: '/component-practice',
      name: 'Component Practice',
      date: '25/10/2021'
    },
    {
      url: '/reacttiveform-practice',
      name: 'Reacttiveform',
      date: '12/10/2021'
    },



  ];
  logIn;
  constructor() {
    this.logIn = localStorage.getItem("loginAuth");
    // console.log(this.logIn);
  }
}
