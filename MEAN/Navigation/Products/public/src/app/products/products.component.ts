import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts: [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    let tempObservable = this._httpService.getProducts();
    tempObservable.subscribe(data => {
      console.log(data);
      this.allProducts = data["products"];
    })
  }

  deleteOne(id){
    console.log(id);
    let tempObservable = this._httpService.takeOutProduct(id);
    tempObservable.subscribe(data => {
      console.log(data);
    })
    this.getProducts();
  }

}
