import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { PlayersComponent } from './players/players.component';
const config: SocketIoConfig = { url: 'http://localhost:8200', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    // PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
