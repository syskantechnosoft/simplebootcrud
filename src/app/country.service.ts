import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'http://localhost:8095/country';

  constructor(private http: HttpClient) { }

  getCountry(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCountry(country: Country): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, country);
  }

  updateCountry(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCountriesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
}
