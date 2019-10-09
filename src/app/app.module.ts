import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryInfoComponent } from './country-info/country-info.component';
import { CreateCountryComponent } from './create-country/create-country.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryInfoComponent,
    CreateCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
