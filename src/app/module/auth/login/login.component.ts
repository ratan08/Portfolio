import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FileDataService } from 'src/app/services/file-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private snack: MatSnackBar, private router: Router, private data: FileDataService) { }

  ngOnInit() {
    this.valid();
  }
  valid() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(this.emailRegx)]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
    })
  }
  submit() {

    if (this.loginForm.invalid) {
      this.snack.open("Enter email and password First", 'Done', {
        duration: 3000
      });
    } else {

      let userData = JSON.parse(localStorage.getItem('user'));
      console.log(userData);
      if (this.loginForm.value.email === userData.email && this.loginForm.value.password === userData.password) {

        localStorage.setItem("loginAuth", "true");
        //location.reload();

        this.router.navigateByUrl('/home');
        this.data.logIn = 'true';
        this.snack.open("Login successfully", 'Done', {
          duration: 3000
        });
      } else {
        this.snack.open("Enter email and password properly or Register First", 'Done', {
          duration: 3000
        });
      }

    }

  }
}
