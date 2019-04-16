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
  ATask : any;
  name : string = "";
  newTask: any;
  errors = [];

  constructor (private _httpService: HttpService) {}
  ngOnInit(){
    this.newTask = {title: "", description: ""}
  }

  getAllTask(){
    let tempObservable = this._httpService.getTasks();
    tempObservable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data['tasks'];
    });
  }

  onSubmit(){
    console.log("submitted");
    let tempObservable = this._httpService.addTask(this.newTask);
    tempObservable.subscribe(data => {
      if(data["status"] == true){
        this.newTask = {title: "", description: ""}
      }
      else{
        console.log(data)
        console.log(data["error"].errors)
        for(let x in data["error"].errors){
          console.log(data["error"].errors[x].message)
          this.errors.push(data["error"].errors[x].message)
        }
      }
    })
  }

  showClickedTask(aTask){
    console.log("This is my Task", aTask);
    this.ATask = {title: aTask.title, description: aTask.description, completed: aTask.completed, id : aTask._id}
   
  }

  destroyTask(task){
    let tempObservable = this._httpService.deleteTask(task._id);
    tempObservable.subscribe(data => {

    })
  }

  findATask(event){
    console.log("This is an event", event);
    if(event.key.length == 1){
      this.name += event.key;
    }
    console.log(this.name);
  }

  // findTask(){
  //   let tempObservable = this._httpService.getATaskFromDB(this.name);
  //   tempObservable.subscribe(data => {
  //     this.thisTask = data['task'];
  //     console.log(this.thisTask)
  //   });
  // }
}
