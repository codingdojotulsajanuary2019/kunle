import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  sanjose: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSanJoseInfo();
  }

  getSanJoseInfo(){
    let tempObservable = this._httpService.sanJoseInfo();
    tempObservable.subscribe(data => {
      console.log(data);
      this.sanjose = data;
    })
  }

}
