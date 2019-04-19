import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  allMovies: [];
  movie: any;
  status: boolean = false;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getMovies()
  }

  getMovies(){
    let tempObservable = this._httpService.getMovies();
    tempObservable.subscribe(data => {
      console.log(data);
      this.allMovies = data["movies"];
    })
  }

  initAddNew(){
    this.status = true;
    this.movie = {
      title: "",
      comment: {
        name: "",
        rating: 0,
        review: ""
      }
    } 
  }

  eventParent(){
    this.getMovies();
    this.movie = {}
    this.movie.comment = {};
    this.status = false;
  }
}
