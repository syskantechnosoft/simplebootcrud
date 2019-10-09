package com.cognizant.bootcrud.repository;

import org.springframework.data.repository.CrudRepository;

import com.cognizant.bootcrud.bean.Country;

public interface CountryRepository extends CrudRepository<Country, Integer> {

}
