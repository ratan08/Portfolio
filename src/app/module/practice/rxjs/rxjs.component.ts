import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { exit } from 'process';
import { AsyncSubject, defer, from, fromEvent, generate, interval, observable, Observable, of, range, ReplaySubject, timer } from 'rxjs';
import { SubjectDataService } from 'src/app/services/subject-data.service';
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
  subjectData;
  constructor(private snack: MatSnackBar, private subject: SubjectDataService) { }
  ngOnInit(): void {
    this.subject.recived.subscribe((res) => {
      this.subjectData = res;
    })
  }
  ngAfterViewInit(): void {
    fromEvent(this.button.nativeElement, 'click')
      .subscribe(res => console.log(res))
  }
  show() {
    const sub = new AsyncSubject();
    console.log("AsyncSubject");

    sub.next(123);
    sub.subscribe(res => console.log(res));
    sub.next(456);
    sub.subscribe(res => console.log(res));
    sub.complete();


    console.log("ReplaySubject");

    const data = new ReplaySubject(3);
    data.next("Video " + 1);
    data.next("Video " + 2);
    data.next("Video " + 3);
    data.next("Video " + 4);
    data.next("Video " + 5);
    data.next("Video " + 6);
    data.next("Video " + 7);
    data.next("Video " + 8);
    data.subscribe(res => {
      console.log(res);
    })
    this.snack.open("Check console", 'Done', {
      duration: 3000
    });
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
