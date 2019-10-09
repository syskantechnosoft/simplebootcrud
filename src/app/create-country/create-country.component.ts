import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {

  country: any = new Country();
  submitted = false;

  constructor(private route:ActivatedRoute ,private countryService: CountryService, private router : Router) { }

  ngOnInit() {
    // this.countryService.getCountry(id).subscribe(
    //   data => { console.log("Country object for Edit in CountryList :" + JSON.stringify(data));this.country=data;this.router.navigate(['/add', { id:this.country.id }]); },
    //   error => { console.log("Error in CountryList Edit operation :" + JSON.stringify(error)) }
    // );

    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => this.country =
    //     this.countryService.getCountry(parseInt(params.get('id'))))
    // );

    
    this.countryService.getCountry(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(
      data=>{this.country=data;console.log("Country on Init in Create-Country :"+JSON.stringify(this.country))},
      error=>{}
    );
  }

  newCountry(): void {
    this.submitted = false;
    this.country = new Country();
  }

  save() {
    console.log("In Create country save method : country is ="+JSON.stringify(this.country));
    this.countryService.createCountry(this.country)
      .subscribe(data => console.log(data), error => console.log(error));
    this.country =new Country();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['']);
  }
}
