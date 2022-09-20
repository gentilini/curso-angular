import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent implements OnInit {

  show:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.show = !this.show;
  }

}
