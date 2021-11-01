import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDataService {
  task = [
    {
      url: '/task/registration',
      name: 'Registration Form',
      date: '14/10/2021'
    },
    {
      url: '/task/tictactoe',
      name: 'Tictactoe Game',
      date: '21/10/2021'
    },
    {
      url: '/task/todo',
      name: 'TODO List',
      date: '21/10/2021'
    }
  ];
  practice = [
    {
      url: '/practice/reacttiveform-practice',
      name: 'Reacttiveform Practice',
      date: '12/10/2021'
    },
    {
      url: '/practice/component-practice',
      name: 'Component Practice',
      date: '25/10/2021'
    },
    {
      url: '/practice/template-practice',
      name: 'Template Practice',
      date: '26/10/2021'
    },

    {
      url: '/practice/directives-practice',
      name: 'Directives Practice',
      date: '27/10/2021'
    },

    {
      url: '/auth/login',
      name: 'Login Page',
      date: '30/10/2021'
    }, {
      url: '/auth/register',
      name: 'Register Page',
      date: '30/10/2021'
    },

  ];
  logIn;
  constructor() {
    this.logIn = localStorage.getItem("loginAuth");
    console.log(this.logIn);
  }
}
