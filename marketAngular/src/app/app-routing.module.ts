import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListingsComponent } from './listings/listings.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [ 
  {
  path: '',
  pathMatch: 'full',
  component: LoginComponent,
  children: []
},
{
  path: 'browse',
  pathMatch: 'full',
  component: BrowseComponent,
  children: []
},
{
  path: 'listings',
  pathMatch: 'full',
  component: ListingsComponent,
  children: []
},
// {
//   path: '**',
//   component: PagenotfoundComponent,
//   children: []
// },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
