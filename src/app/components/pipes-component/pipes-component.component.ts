import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes-component.component.html',
  styleUrls: ['./pipes-component.component.css']
})
export class PipesComponentComponent implements OnInit {

  someText:string = "ALGUM TEXTO QUALQUER...";
  today:Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
