import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm !: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private snack: MatSnackBar) { }

  ngOnInit() {
    this.valid();
  }
  valid() {
    this.registrationForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern(this.emailRegx)]),
      'password': new FormControl('', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
      'cpassword': new FormControl('', [Validators.required]),
    })
  }
  submit() {
    console.log(this.registrationForm);
    if (this.registrationForm.invalid) {
      this.snack.open("Fill the form", 'Done', {
        duration: 3000
      });
    } else {
      if (this.registrationForm.value.password === this.registrationForm.value.cpassword) {
        localStorage.setItem("user", JSON.stringify(this.registrationForm.value));
        this.snack.open("User has been register!! Now login", 'Done', {
          duration: 3000
        });
      } else {
        this.snack.open("Password and confirm password not match", 'Done', {
          duration: 3000
        });
      }
    }

  }
}


