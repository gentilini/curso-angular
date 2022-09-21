import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render-component',
  templateUrl: './list-render-component.component.html',
  styleUrls: ['./list-render-component.component.css']
})
export class ListRenderComponentComponent implements OnInit {

  techs = [
    {name: "JS", type: "Frontend"},
    {name: "TS", type: "Frontend"},
    {name: "CSS", type: "Frontend"},
    {name: "HTML", type: "Frontend"},
    {name: "C#", type: "Backend"},
    {name: ".NET", type: "Backend"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
