import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrandComponent } from './products/brand/brand.component';
import { DetailsComponent } from './products/details/details.component';
import { CategoryComponent } from './products/category/category.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllComponent } from './reviews/all/all.component';
import { ReviewDetailsComponent } from './reviews/review-details/review-details.component';

const routes: Routes = [
  { path: 'products',component: ProductsComponent, children: [
      { path: 'brand/:brand', component: BrandComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'category/:cat', component: CategoryComponent }
    ]
  }, 

  { path: 'reviews', component: ReviewsComponent, children: [
      { path: 'details/:id', component: ReviewDetailsComponent },
      { path: 'author/:id', component: AuthorComponent },
      { path: 'all/:id', component: AllComponent }
    ] 
  },

  { path: '', pathMatch: 'full', redirectTo: '/products' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
