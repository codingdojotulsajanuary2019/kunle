import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  tasks = [];
  thisTask = {};
  taskTitle : String = "" ;
  taskDesc : String = "" ;
  name : string = ""

  constructor (private _httpService: HttpService) {}
  ngOnInit(){

  }

  getAllTask(){
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data['tasks'];
    });
  }

  showTask(aTask){
    console.log("This is my Task", aTask);
    this.taskTitle = aTask.title;
    this.taskDesc = aTask.description;
  }

  findATask(event){
    console.log("This is an event", event);
    if(event.key.length == 1){
      this.name += event.key;
    }
    console.log(this.name);
  }

  findTask(){
    let tempObservable = this._httpService.getATaskFromDB(this.name);
    tempObservable.subscribe(data => {
      this.thisTask = data['task'];
      console.log(this.thisTask)
    });
  }
}
