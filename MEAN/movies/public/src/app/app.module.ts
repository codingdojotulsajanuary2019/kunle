import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    ReviewsComponent,
    NewMovieComponent,
    AddReviewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
