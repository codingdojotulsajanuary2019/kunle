import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  joinedGame = false;
  connectedPlayers = [];
  position: any;

  error : string;
  playerName: string;

  constructor (
    private _httpService: HttpService,
    private socket: Socket
    ){}

  ngOnInit(){
    this.playerName = "";
  }

  joinGame(){
    if(this.playerName.length < 2){
      this.error = "Name must be atleast 2 letters long"
    }
    else{
      this.socket.emit('player', {name: this.playerName})
      console.log("socket emitted");
      this.beginGame()
      this.joinedGame = true;
    }
  }

  beginGame(){
    this.socket.on('allPlayers', data => {
      console.log(data);
      this.connectedPlayers = data["allUsers"];

      if(data["playersReady"]){
        if(data["playersReady"] == this.connectedPlayers.length){
          this.socket.emit('startGame', {player: "All ready"})
        }
      }
    })
  }

  startGame(){
    this.socket.emit('status', {status: "ready", name: this.playerName})
  }

}
