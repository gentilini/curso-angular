import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-son-component',
  templateUrl: './son-component.component.html',
  styleUrls: ['./son-component.component.css']
})
export class SonComponentComponent implements OnInit {

  @Input() consumer!: {id:string, name:string, surName:string};

  constructor() { }

  ngOnInit(): void {
  }

}
