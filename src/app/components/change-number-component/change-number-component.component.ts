import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number-component',
  templateUrl: './change-number-component.component.html',
  styleUrls: ['./change-number-component.component.css']
})
export class ChangeNumberComponentComponent implements OnInit {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.changeNumber.emit();
  }

}
