import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Value } from '../models/value';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  url = 'http://localhost:5000/api/values/';

  constructor(private http: HttpClient) { }

  getValues(): Observable<Value[]> {
    return this.http.get<Value[]>(this.url);
  }
}
