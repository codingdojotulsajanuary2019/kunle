import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllCakes(){
    return this._http.get('/cakes')
  }

  addCakeToDB(aCake){
    console.log("Received cake");
    return this._http.post('/cakes', aCake)
  }

  updateComment(id: any, cake : object){
    return this._http.put(`/${id}`, cake);
  }
  
}
