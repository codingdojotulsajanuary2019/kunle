import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newAuthor: any;
  success = false;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newAuthor = {name: ""}
  }

  addAuthortoDB(){
    let tempObservable = this._httpService.addAuthor(this.newAuthor);
    tempObservable.subscribe(data => {
      console.log(data);
      if(data["status"] == true ){
        this.newAuthor = {name: ""}  
        this.success = true;     
      }
      console.log(this.success);
    })
  }

}
