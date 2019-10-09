package com.cognizant.bootcrud.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.bootcrud.bean.Country;
import com.cognizant.bootcrud.repository.CountryRepository;

@RestController
@RequestMapping("/country")
@CrossOrigin(allowedHeaders = "*", origins = "*", methods = { RequestMethod.GET,
		RequestMethod.DELETE, RequestMethod.POST, RequestMethod.PUT })
public class CountryController {

	@Autowired
	CountryRepository countryRepository;

	// insert new country into database
	@PostMapping("/add")
	public Country addCountry(@RequestBody Country country) {
		return countryRepository.save(country);
	}

	// fetch all country list from database
	@GetMapping("/all")
	public Iterable<Country> allCountry() {
		return countryRepository.findAll();
	}

	// fetch specific country by their ID
	@GetMapping("/{id}")
	public Optional<Country> countryById(@PathVariable("id") int id) {
		return countryRepository.findById(id);
	}

	// update existing country
	@PutMapping("/update/{id}")
	public Country updateCountry(@PathVariable int id, @RequestBody Country country) {
		return countryRepository.save(country);
	}

	// delete country from database
	@DeleteMapping("/{id}")
	public void deleteCountry(@PathVariable("id") int id) {
		countryRepository.deleteById(id);
	}
}
