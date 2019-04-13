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

  deleteTask(title: string){
    let tempObservable = this._http.delete(`/${title}`);
    tempObservable.subscribe(data => console.log("Deleted a task!"));
  }

  getATaskFromDB(title: String){
    console.log(title, "This is a title");
    return this._http.get(`/${title}`);
  }
}