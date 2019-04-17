import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { TulsaComponent } from './tulsa/tulsa.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'seattle', component: SeattleComponent },
  { path: 'san-jose', component: SanJoseComponent },
  { path: 'tulsa', component: TulsaComponent },
  { path: '', pathMatch: 'full', redirectTo: '/tulsa' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
