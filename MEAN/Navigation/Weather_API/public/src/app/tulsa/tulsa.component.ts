import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tulsa',
  templateUrl: './tulsa.component.html',
  styleUrls: ['./tulsa.component.css']
})
export class TulsaComponent implements OnInit {
  tulsa: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getTulsaInfo();
  }

  getTulsaInfo(){
    let tempObservable = this._httpService.tulsaInfo();
    tempObservable.subscribe(data => {
      console.log(data);
      this.tulsa = data;
    })
  }

}