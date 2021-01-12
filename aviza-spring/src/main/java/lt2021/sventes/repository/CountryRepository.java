package lt2021.sventes.repository;

import org.springframework.data.repository.CrudRepository;

import lt2021.sventes.model.Country;

public interface CountryRepository extends CrudRepository<Country, Integer> {

}