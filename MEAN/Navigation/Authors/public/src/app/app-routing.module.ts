import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllAuthorComponent } from './all-author/all-author.component';

const routes: Routes = [
  { path: '', component: AllAuthorComponent },
  { path: 'new', component: AddAuthorComponent },
  { path: 'success', pathMatch: 'full', redirectTo: '' },
  { path: 'edit/:id', component: EditAuthorComponent },
  // { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
