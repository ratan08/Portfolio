import { Component, OnInit } from '@angular/core';
import { SubjectDataService } from 'src/app/services/subject-data.service';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.scss']
})
export class Com2Component implements OnInit {
  subjectData;
  constructor(private subject: SubjectDataService) { }

  ngOnInit(): void {
    this.subject.recived.subscribe(res => {
      this.subjectData = res;
    })
  }
  send(input) {
    this.subject.recived.next(input.value);
    input.value = "";

  }
}
