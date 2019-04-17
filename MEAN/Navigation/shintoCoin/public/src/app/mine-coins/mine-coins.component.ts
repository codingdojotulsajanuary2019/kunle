import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine-coins',
  templateUrl: './mine-coins.component.html',
  styleUrls: ['./mine-coins.component.css']
})
export class MineCoinsComponent implements OnInit {
  question: any;
  num: Number;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getQuestion();

  }

  getQuestion(){
    this.num = Math.floor(Math.random()*5)
    console.log(this.num);

    let tempObservable = this._httpService.getTrivia();
    tempObservable.subscribe(data => {
      console.log(data);
      this.question = data;
    })

  }
}
