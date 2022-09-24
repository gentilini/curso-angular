import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/interfaces/Technology';
import { ListRenderServiceService } from 'src/app/services/list-render-service.service';

@Component({
  selector: 'app-list-render-component',
  templateUrl: './list-render-component.component.html',
  styleUrls: ['./list-render-component.component.css']
})
export class ListRenderComponentComponent implements OnInit {

  technologies: Technology[] = [
    { name: "JS", type: "Frontend" },
    { name: "TS", type: "Frontend" },
    { name: "CSS", type: "Frontend" },
    { name: "HTML", type: "Frontend" },
    { name: "C#", type: "Backend" },
    { name: ".NET", type: "Backend" },
  ];

  technologyDetails: string = "";

  constructor(private listService: ListRenderServiceService) { }

  ngOnInit(): void {
  }

  showTechnologyDetails(technology:Technology) {
    this.technologyDetails = `A tecnologia ${technology.name} é do tipo ${technology.type}`
  }

  removeTechnology(technology: Technology) {
    this.technologies = this.listService.remove(this.technologies, technology);
  }

}
