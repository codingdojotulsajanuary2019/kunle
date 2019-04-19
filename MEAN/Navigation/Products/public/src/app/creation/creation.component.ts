import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit {
  newProduct: any;
  addErrors = [];

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newProduct = {title: "", price: '0.00', imageURL: ""}
  }

  addProductToDB(){
    let tempObservable = this._httpService.addProduct(this.newProduct);
    tempObservable.subscribe(data => {
      console.log(data);
      if(data["status"] == true ){
        this.newProduct = {title: "", price: '0.00', imageURL: ""}; 
        this._router.navigate(['/products']);
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

}
