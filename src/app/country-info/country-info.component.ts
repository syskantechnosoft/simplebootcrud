import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { CountryListComponent } from '../country-list/country-list.component';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {

  @Input() country: Observable<Object>;

  constructor(private router: Router, private route: ActivatedRoute, private countryService: CountryService, private listComponent: CountryListComponent) { }

  ngOnInit() {
    console.log("ID value =" + this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.country =
        this.countryService.getCountry(parseInt(params.get('id'))))
    );
    console.log("Country Object in Country Info :" + JSON.stringify(this.country))
  }

}
