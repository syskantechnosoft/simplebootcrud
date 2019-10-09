import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { Observable } from 'rxjs';
import { CountryService } from '../country.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Observable<Country[]>;
  selectedCountry: Country;
  country:any;

  constructor(private countryService: CountryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.countries = this.countryService.getCountriesList();
  }

  deleteCountry(id: number) {
    this.countryService.deleteCountry(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  editCountry(id: number) {
    this.countryService.getCountry(id).subscribe(
      data => { console.log("Country object for Edit in CountryList :" + JSON.stringify(data));this.country=data;this.router.navigate(['/add', { id:this.country.id }]); },
      error => { console.log("Error in CountryList Edit operation :" + JSON.stringify(error)) }
    );
  }

  showCountry(id: number) {
    this.countryService.getCountry(id).subscribe(
      data => { console.log("Country object for Info in CountryList :" + JSON.stringify(data)); this.country = data;  },
      error => { console.log("Error in CountryList Show operation :" + JSON.stringify(error)) }
    );
    // this.router.navigate(['info', { id: this.country.id }]);
  }
  selectCountry(country:Country){
    this.selectedCountry = country;
  }
}
