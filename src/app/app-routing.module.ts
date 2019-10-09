import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CreateCountryComponent } from './create-country/create-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryInfoComponent } from './country-info/country-info.component';

const routes: Routes = [
  { path: 'first', component: AppComponent },
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  { path: 'countries', component: CountryListComponent },
  { path: 'info', component: CountryInfoComponent },
  { path: 'add/:id', component: CreateCountryComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
