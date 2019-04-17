import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-all-cake',
  templateUrl: './show-all-cake.component.html',
  styleUrls: ['./show-all-cake.component.css']
})
export class ShowAllCakeComponent implements OnInit {
  allCakes = [];
  cakeComment : any;
  commentStatus : String;
  color : String;
  cakeClicked : any;;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAll();
    this.cakeComment = {comment: "", rating: Number};
  }
  getAll(){
    let tempObservable = this._httpService.getAllCakes();
    tempObservable.subscribe(data => {
      this.allCakes = data["cakes"]
    })
  }
  addCommentToCake(cake){
    let cakeId = cake._id
    let tempObservable = this._httpService.updateComment(cakeId, this.cakeComment );
    tempObservable.subscribe(data => {
      if(data["status"] == true){
        this.cakeComment = {comment: "", rating: Number};
        this.commentStatus = "Succesful";
        this.color = "success";
      }
      else{
        console.log(data);
        if(data["status"] == false){
          for(let x in data["error"].errors){
            this.commentStatus = data["error"].errors[x].message;
            this.color = "danger";
          }
        }
      }
    })
  }

  // trackByFn(index, cake) {
  //   return index;
  // }

  showThisCake(cake){
    this.cakeClicked = cake;
    console.log(cake);
  }

}
