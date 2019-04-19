import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  id: any;
  author: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.author = {name: ""}
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
      this.editAuthorInDB(this.id);
    })
  }

  editAuthorInDB(id){
    let tempObservable = this._httpService.getOneAuthor(id);
    tempObservable.subscribe(data => {
      console.log(data);
      this.author = {name: data["author"].name };
    })
  }

  editThisAuthor(){
    let tempObservable = this._httpService.updateAuthor(this.id, this.author);
    tempObservable.subscribe(data => {
      this.author = {name: ""};
    })
  }

}
