import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-show-one',
  templateUrl: './show-one.component.html',
  styleUrls: ['./show-one.component.css']
})
export class ShowOneComponent implements OnInit {
  @Input() cakeToShow : any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  // for(let coment  this.cakeToShow.coment){

  // }

}
