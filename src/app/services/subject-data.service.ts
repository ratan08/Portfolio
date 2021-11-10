import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectDataService {
  //recived = new Subject();
  recived = new BehaviorSubject<string>('testData');
  //recived = new ReplaySubject(3);
  constructor() { }
}
