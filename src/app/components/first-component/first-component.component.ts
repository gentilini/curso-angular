import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Rafael da Silva Gentilini";
  age: number = 38;
  job: string = "Engenheiro de software"
  stack: string[] = ["Angular", ".Net", "CSharp", "HTML", "CSS", "JavaScript", "TypeScript"];
  car = {
    brand: "Hyundai",
    model: "HB20",
    year: 2018
  }

  constructor() { }

  ngOnInit(): void {
  }

}
