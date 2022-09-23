import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding-component',
  templateUrl: './two-way-data-binding-component.component.html',
  styleUrls: ['./two-way-data-binding-component.component.css']
})
export class TwoWayDataBindingComponentComponent implements OnInit {

  name:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
