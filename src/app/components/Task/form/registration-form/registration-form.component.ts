import { MatDialog } from '@angular/material/dialog';

import { InputService } from '../../../../services/input.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, MinLengthValidator, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DetailDailogComponent } from 'src/app/Dailog/detail-dailog/detail-dailog.component';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm !: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  pinApi = "https://api.postalpincode.in/pincode/";

  zip: any;
  state: any;
  city: any;
  constructor(private input: InputService, private dailog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    this.validators();
  }
  validators() {
    this.registrationForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      'mobile': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'email': new FormControl('', [Validators.required, Validators.pattern(this.emailRegx)]),
      'dob': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'pinCode': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'city': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required),
      'bloodgrp': new FormControl('', Validators.required),
      'gender': new FormControl('Male', Validators.required),
      'subject': new FormArray([
        new FormControl('', Validators.required)
      ], this.betweenLength(5, 10)),
    })
  }
  betweenLength(min: number, max: number): ValidatorFn | any {
    return (control: AbstractControl[]) => {
      if (!(control instanceof FormArray)) return;
      return control.length < min || control.length > max ? { betweenLength: true } : null;
    }
  }
  pincode(event: any) {
    console.log(event, this.registrationForm.value.pinCode);
    let a = this.registrationForm.value.pinCode;
    if (a.length == 6) {
      this.http.get("https://api.postalpincode.in/pincode/" + a.toString())
        .subscribe(data => {
          this.zip = data;
          console.log(this.zip[0].PostOffice[0]);
          this.city = this.zip[0].PostOffice[0].District;
          this.state = this.zip[0].PostOffice[0].State;
        })
    }

  }
  get addSubject() {
    return (<FormArray>this.registrationForm.get('subject')).controls;
  }
  submit() {
    this.dailog.open(DetailDailogComponent, {
      data: this.registrationForm.value
    });

    console.log(this.registrationForm.value);

  }

  deleteRow(index: number) {
    (<FormArray>this.registrationForm.get('subject')).removeAt(index);
  }
  add() {
    (<FormArray>this.registrationForm.get('subject')).push(new FormControl('', Validators.required));
  }
  char(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.characters(event)
  }
  numbers(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.number(event);
  }
  blood(event: { keyCode: number; preventDefault: () => void; }) {
    this.input.bloodGrp(event);
  }
}
