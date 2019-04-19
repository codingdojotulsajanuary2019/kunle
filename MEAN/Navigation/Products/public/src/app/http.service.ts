import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get('/myproducts')
  }
  addProduct(product){
    return this._http.post('/myproduct', product)
  }
  getOneProduct(id){
    return this._http.get(`/myproduct/${id}`);
  }
  updateProduct(id, product: object){
    return this._http.put(`/edit/${id}`, product);
  }
  takeOutProduct(id){
    return this._http.delete(`/${id}`);
  }
}
