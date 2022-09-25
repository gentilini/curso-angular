import { Component, OnInit } from '@angular/core';

import { Technology } from 'src/app/interfaces/Technology';
import { ActivatedRoute } from '@angular/router';
import { ListRenderServiceService } from 'src/app/services/list-render-service.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  technology?: Technology;

  constructor(
    private listService:ListRenderServiceService, 
    private router:ActivatedRoute) { 
      this.getTechnology();
     }

  ngOnInit(): void {
  }

  getTechnology() {
    const id = Number(this.router.snapshot.paramMap.get("id"));
    this.listService.getItem(id).subscribe((technology) => (this.technology = technology));
  }

}
