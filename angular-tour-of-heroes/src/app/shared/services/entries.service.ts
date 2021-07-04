import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Entries } from '../models/entries';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  private apiUrl = environment.freeAPI;

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Entries>{
    return this.http.get<Entries>(this.apiUrl);
  }
}
