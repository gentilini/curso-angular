import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.css']
})
export class FatherComponentComponent implements OnInit {

  consumer = {
    id: "1045",
    name: "Rafael",
    surName: "Gentilini",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
