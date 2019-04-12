import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
  }
  getPokemon(){
    console.log("I'm working");
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      var allAbilities : string ="";
      let otherUrl : string = "";
      for(let idx in data["abilities"]){
        allAbilities += data["abilities"][idx]["ability"]["name"] + " ";
        otherUrl = data["abilities"][idx]["ability"]["url"];
        this.getSimilarOthers(otherUrl);
      }
      console.log(`${data["name"]} abilities are ${allAbilities}`);
    })
  }

  getSimilarOthers(url : string){
    let num = this._http.get(`${url}`);
    num.subscribe(data => console.log(`${data["pokemon"].length} other pokemon has the ability "${data["name"]}"`))
  }
}
