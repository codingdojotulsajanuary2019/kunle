import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-cake',
  templateUrl: './add-cake.component.html',
  styleUrls: ['./add-cake.component.css']
})
export class AddCAkeComponent implements OnInit {
  @Input() cakeToAdd: any;
  addErrors = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.cakeToAdd = {baker: "", imageURL: ""}
  }

  addCake(){
    let tempObservable = this._httpService.addCakeToDB(this.cakeToAdd);
    tempObservable.subscribe(data => {
      if(data["status"] == true){
        this.cakeToAdd = {baker: "", imageURL: ""}
      }
      if(data["status"] == false){
        for(let x in data["error"].errors){
          this.addErrors.push(data["error"].errors[x].message)
        }
      }
    })
  }

  clearError(){
    this.addErrors = [];
  }
}
