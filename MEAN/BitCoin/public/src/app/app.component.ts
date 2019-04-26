import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  currency : any;
  dataCurrency = "USD"

  constructor(private _httpService: HttpService) { }

  ngOnInit(){
    this.getUSD()
  }

  getUSD(){
    let tempObservable = this._httpService.getPriceUSD();
    tempObservable.subscribe(data => {
      console.log(data);
      this.currency = data;
    })
  }

  getData(){
    if(this.dataCurrency != "USD"){
      let tempObservable = this._httpService.getPrice(this.dataCurrency);
      tempObservable.subscribe(data => {
        console.log(data);
        this.currency = data;
      })
    }
    if(this.dataCurrency == "USD"){
      this.getUSD();
    }
  }
}
