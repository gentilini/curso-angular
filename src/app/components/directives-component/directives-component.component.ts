import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-component',
  templateUrl: './directives-component.component.html',
  styleUrls: ['./directives-component.component.css']
})
export class DirectivesComponentComponent implements OnInit {

  size: number = 300;
  classes: string[] = ['title'];
  constructor() { }

  ngOnInit(): void {
  }

}
