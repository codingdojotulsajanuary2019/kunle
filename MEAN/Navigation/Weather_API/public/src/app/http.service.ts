import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  tulsaInfo(){
    console.log("lets go tulsa");
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Tulsa&appid=e8a8d5b898dc846a65d884e95ceb60a9&units=imperial')
  }

  sanJoseInfo(){
    console.log("lets go san jose");
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Jose,us&appid=e8a8d5b898dc846a65d884e95ceb60a9&units=imperial')
  }

  seattleInfo(){
    console.log("lets go seattle");
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&appid=e8a8d5b898dc846a65d884e95ceb60a9&units=imperial')
  }
}
