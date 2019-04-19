import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: 'movies', component: AllMoviesComponent, children : [
      { path: 'new', component: NewMovieComponent }
    ]
  },
  { path: 'movies/:id', component: ReviewsComponent },
  { path: 'movies/:id/review', component: AddReviewComponent },
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
