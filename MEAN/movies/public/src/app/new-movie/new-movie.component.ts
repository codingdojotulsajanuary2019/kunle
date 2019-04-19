import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  @Output() aTaskEmitter = new EventEmitter();

  @Input() movie: any;
  addErrors = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addMovieToDB(){
    let tempObservable = this._httpService.addMovie(this.movie);
    tempObservable.subscribe(data => {
      console.log(data);
      if(data["status"] == true ){

        let x = this._httpService.getMovies();
        x.subscribe(data => {
          console.log("yes")
        })

        this.aTaskEmitter.emit()
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

  clearError(){
    this.addErrors = [];
  }

  returnToMovie(){
    this.aTaskEmitter.emit();
  }


}
