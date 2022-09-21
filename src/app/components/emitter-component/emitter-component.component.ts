import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter-component',
  templateUrl: './emitter-component.component.html',
  styleUrls: ['./emitter-component.component.css']
})
export class EmitterComponentComponent implements OnInit {

  myNumber:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 10);
  }

}
