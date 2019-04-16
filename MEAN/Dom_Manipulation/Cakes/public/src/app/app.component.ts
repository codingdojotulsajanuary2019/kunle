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
  newCake: any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
  }
}
