import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss']
})
export class ChildcomponentComponent implements OnInit {
  @Input() data: any;
  binding = "";
  @Output() value = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {
  }
  sendData() {
    this.value.emit(this.binding)
  }
}
