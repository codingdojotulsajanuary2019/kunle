import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    
  }

  getTasks(){
    return this._http.get('/tasks');
  }

  addTask(newtask){
    return this._http.post('/tasks', newtask)
  }

  editATask(atask, id){
    return this._http.put(`/${id}`, atask)
  }

  deleteTask(id){
    return this._http.delete(`/${id}`);
  }

  getATaskFromDB(title: String){
    console.log(title, "This is a title");
    return this._http.get(`/${title}`);
  }
}