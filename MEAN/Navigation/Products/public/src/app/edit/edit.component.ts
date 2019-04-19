import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any;
  product: any;
  addErrors = [];
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.product = {title: "", price: '0.00', imageURL: ""}
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id = params['id'];
      this.editProductInDB(this.id);
    })
  }

  editProductInDB(id){
    let tempObservable = this._httpService.getOneProduct(id);
    tempObservable.subscribe(data => {
      console.log(data);
      this.product = data["product"];
    })
  }

  editThisProduct(){
    let tempObservable = this._httpService.updateProduct(this.id, this.product);
    tempObservable.subscribe(data => {
      if(data["status"] == true) {
        this._router.navigate(['/products']);
      }
      else{
        console.log(data);
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

  deleteOne(id){
    console.log(id);
    let tempObservable = this._httpService.takeOutProduct(id);
    tempObservable.subscribe(data => {
      console.log(data);
      if(data["status"] == true) {
        this._router.navigate(['/products']);
      }
    })
  }

}
