import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-author',
  templateUrl: './all-author.component.html',
  styleUrls: ['./all-author.component.css']
})
export class AllAuthorComponent implements OnInit {
  allAuthors: [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    let tempObservable = this._httpService.getAuthors();
    tempObservable.subscribe(data => {
      console.log(data);
      this.allAuthors = data["authors"];
    })
  }

  deleteOne(author, x){
    let id = author._id;
    console.log(id);
    let tempObservable = this._httpService.takeOutAuthor(id);
    tempObservable.subscribe(data => {
      console.log(data);
      console.log(x);
    })
    this.getAuthors();
  }

}
