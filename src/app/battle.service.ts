import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  private battleUrl = 'api/battle';

  constructor(private http: HttpClient) { }

  getBattleSummary(): Observable<any> {
    return this.http.get(this.battleUrl)
  }
}
