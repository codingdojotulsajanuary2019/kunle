import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  seattle: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSeattleInfo();
  }

  getSeattleInfo(){
    let tempObservable = this._httpService.seattleInfo();
    tempObservable.subscribe(data => {
      console.log(data);
      this.seattle = data;
    })
  }

}
