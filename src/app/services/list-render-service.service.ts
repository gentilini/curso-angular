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

  remove(id:Number) {
    this.http.delete<Technology>(`${this.apiUrl}/${id}`).subscribe();
  }

  getAll(): Observable<Technology[]> {
    return this.http.get<Technology[]>(this.apiUrl)
  }

  getItem(id:Number): Observable<Technology> {
    return this.http.get<Technology>(`${this.apiUrl}/${id}`)
  }
}
