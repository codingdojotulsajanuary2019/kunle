import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  id: any;
  movie: any;
  // addErrors = [];

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
    })
  }

  deleteComment(commid){
    let comment = {id : commid };
    let tempObservable = this._httpService.updateMovie(this.id, comment);
    tempObservable.subscribe(data => {
      if(data["status"] == true) {
        this.movie = {};
        this.getAMovieFromDB(this.id);
      }
    })
  }

  takeOutMovie(){
    let tempObservable = this._httpService.takeOutMovie(this.id);
    tempObservable.subscribe(data => {
      console.log(data);
      if(data["status"] == true) {
        this._router.navigate(['/movies']);
      }
    })
  }
}
