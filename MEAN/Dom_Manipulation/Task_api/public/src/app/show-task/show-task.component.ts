import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  @Input() taskToShow : any;

  constructor (private _httpService: HttpService) {}

  ngOnInit() {
  }

  editTask(){
    let id = this.taskToShow.id
    let tempObservable = this._httpService.editATask(this.taskToShow, id);
    tempObservable.subscribe(data => {
      if(data["status"] == true){
        this.taskToShow = {title: "", description: "", completed: "",
        id : ""};
      }
    })
  }

}
