import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Warrior } from './warrior';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WarriorService {
  private warriorUrl = 'api/warrior'; // URL to web api

  constructor(private http: HttpClient) { }

  getWarriors(): Observable<Warrior[]> {
    return this.http.get<Warrior[]>(this.warriorUrl)
  }

  updateWarrior(warrior: Warrior): Observable<Warrior> {
    const url = `${this.warriorUrl}/${warrior.id}`
    console.log({ url })
    return this.http.put<Warrior>(url, warrior, httpOptions)
  }
}
