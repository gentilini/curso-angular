import { Injectable } from '@angular/core';
import { Technology } from '../interfaces/Technology';

@Injectable({
  providedIn: 'root'
})
export class ListRenderServiceService {

  constructor() { }

  remove(technologies:Technology[], technology:Technology) {
    return technologies.filter((x) => {
      return technology.name !== x.name;
    });
  }
}
