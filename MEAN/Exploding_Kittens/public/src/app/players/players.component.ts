// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-players',
//   templateUrl: './players.component.html',
//   styleUrls: ['./players.component.css']
// })
// export class PlayersComponent implements OnInit {
//   playerName: string;
//   error : string;

//   constructor() { }

//   ngOnInit() {
//     this.playerName = "";
//   }

//   joinGame(){
//     if(this.playerName.length < 2){
//       this.error = "Name must be atleast 2 letters long"
//     }
//     else{
//       this.socket.emit('player', {name: this.playerName})
//       console.log("socket emitted");
//       this.beginGame()
//       this.playerReady = true;
//       this.playerName = "";
//     }
//   }

// }
