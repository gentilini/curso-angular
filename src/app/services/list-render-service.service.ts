import { Injectable } from '@angular/core';
import { Technology } from '../interfaces/Technology';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListRenderServiceService {

  private apiUrl = "http://localhost:3000/technologies";

  constructor(private http: HttpClient) { }

  remove(technologies:Technology[], technology:Technology) {
    return technologies.filter((x) => {
      return technology.name !== x.name;
    });
  }

  getAll(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.apiUrl)
  }
}
