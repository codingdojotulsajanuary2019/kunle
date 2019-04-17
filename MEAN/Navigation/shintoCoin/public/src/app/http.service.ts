import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTrivia(){
    return this._http.get('https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple');
  }
}
