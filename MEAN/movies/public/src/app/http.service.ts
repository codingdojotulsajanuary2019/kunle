import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getMovies(){
    return this._http.get('/mymovies')
  }
  addMovie(movie){
    return this._http.post('/mymovie', movie)
  }
  getOneMovie(id){
    return this._http.get(`/mymovie/${id}`);
  }
  updateMovie(id, comment: object){
    return this._http.put(`/edit/${id}`, comment);
  }
  takeOutMovie(id){
    return this._http.delete(`/${id}`);
  }
  addComment(id, comment: object){
    return this._http.put(`/mymovies/edit/${id}`, comment)
  }
}
