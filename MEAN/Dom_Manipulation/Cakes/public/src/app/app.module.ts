import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCAkeComponent } from './add-cake/add-cake.component';
import { ShowAllCakeComponent } from './show-all-cake/show-all-cake.component';
import { ShowOneComponent } from './show-all-cake/show-one/show-one.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCAkeComponent,
    ShowAllCakeComponent,
    ShowOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
