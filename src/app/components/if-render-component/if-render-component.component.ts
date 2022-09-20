import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render-component',
  templateUrl: './if-render-component.component.html',
  styleUrls: ['./if-render-component.component.css']
})
export class IfRenderComponentComponent implements OnInit {

  canShow:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
