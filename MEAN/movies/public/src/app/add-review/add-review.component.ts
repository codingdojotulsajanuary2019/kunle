import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  id: any;
  movie: any;
  comment: {};
  addErrors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
      this.getAMovieFromDB(this.id);
    })
  }

  getAMovieFromDB(id){
    let tempObservable = this._httpService.getOneMovie(id);
    tempObservable.subscribe(data => {
      console.log(data);
      this.movie = data["movie"];
      this.comment = {
        name: "",
        rating: 0,
        review: ""
      }
    })
  }

  clearError(){
    this.addErrors = [];
  }

  addCommentToMovie(){
    console.log(this.comment);
    let tempObservable = this._httpService.addComment(this.id, this.comment);
    tempObservable.subscribe(data => {
      console.log(data);
      if(data["status"] == true ){
        this._router.navigate(['/movies']);
      }
      else{
        if(data["status"] == false){
          for(let x in data["error"].errors){
            this.addErrors.push(data["error"].errors[x].message)
          }
        }
      }
    }) 
  }

}
