import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { exit } from 'process';
import { defer, from, fromEvent, generate, interval, observable, Observable, of, range, timer } from 'rxjs';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, AfterViewInit {
  arr = [2, 3, 4, 6, 7, 8];
  arr1 = ["Strawberry", "Cherry", "Blackberry"];
  num1 = of(1, 2, 3, 4, 5, 6, 7)
  num2 = of(this.arr);
  from1 = from(this.arr);
  from2 = from('ratan');
  inter = interval(1000);
  time = timer(3000, 1000)
  rangeOfNumber = range(5, 100);
  number = generate(
    1,
    x => x < 20,
    x => x + 2
  );
  @ViewChild('from', { static: true }) button: ElementRef;

  constructor(private snack: MatSnackBar) { }
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement, 'click')
      .subscribe(res => console.log(res))

  }
  interval() {
    let ab = this.inter.subscribe(res => {
      console.log(res);
    })
    setTimeout(() => {
      ab.unsubscribe();
      console.log('unsubscribe call');
    }, 5000);
    this.snack.open("Check console", 'Done', {
      duration: 3000
    });
  }

  generate() {
    console.log("generate method call");
    this.number.subscribe(res => {
      console.log(res);
    });
    this.snack.open("Check console", 'Done', {
      duration: 3000
    });
  }
  ofMethod() {
    console.log("of method call");
    this.num1.subscribe(res => {
      console.log(res);
    });
    this.num2.subscribe(res => {
      console.log(res);
    });
    this.snack.open("Check console", 'Done', {
      duration: 3000
    });
  }
  fromMethod() {
    console.log("From method call");
    this.from1.subscribe(res => {
      console.log(res);
    });
    this.from2.subscribe(res => {
      console.log(res);
    })
    this.snack.open("Check console", 'Done', {
      duration: 3000
    });
  }

}
