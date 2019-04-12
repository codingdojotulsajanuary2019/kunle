import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.showTasks("pass in a title");
    this.deleteTask("pass in a title");
  }

  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  showTasks(title: string){
    let tempObservable = this._http.get(`/${title}`);
    tempObservable.subscribe(data => console.log("Got a task!", data));
  }

  deleteTask(title: string){
    let tempObservable = this._http.delete(`/${title}`);
    tempObservable.subscribe(data => console.log("Deleted a task!"));
  }

}
