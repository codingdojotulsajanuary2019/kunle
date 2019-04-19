import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/authors')
  }
  addAuthor(author){
    return this._http.post('/authors', author)
  }
  getOneAuthor(id){
    return this._http.get(`/author/${id}`);
  }
  updateAuthor(id, author: object){
    return this._http.put(`/edit/${id}`, author);
  }
  takeOutAuthor(id){
    return this._http.delete(`/${id}`);
  }
}
