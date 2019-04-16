import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  // allCakes = [];
  newCake: any;
  // cakeComment : any;
  // commentStatus : String;
  // color : String;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.getAll();
    // this.cakeComment = {comment: "", rating: Number};
  }

  // getAll(){
  //   let tempObservable = this._httpService.getAllCakes();
  //   tempObservable.subscribe(data => {
  //     this.allCakes = data["cakes"]
  //   })
  // }

  // populate(cake){
  //   this.cakeComment = {comment: "abc", rating: Number}
  // }

  // addCommentToCake(cake){
  //   let cakeId = cake._id
  //   let tempObservable = this._httpService.updateComment(cakeId, this.cakeComment );
  //   tempObservable.subscribe(data => {
  //     if(data["status"] == true){
  //       this.cakeComment = {comment: "", rating: Number};
  //       this.commentStatus = "Succesful";
  //       this.color = "success";
  //     }
  //     else{
  //       console.log(data);
  //       if(data["status"] == false){
  //         for(let x in data["error"].errors){
  //           this.commentStatus = data["error"].errors[x].errors[x].message;
  //           this.color = "danger";
  //         }
  //       }
  //     }
  //   })

  // }
}
