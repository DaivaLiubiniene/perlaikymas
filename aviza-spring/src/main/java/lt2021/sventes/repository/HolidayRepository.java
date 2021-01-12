package lt2021.sventes.repository;

import org.springframework.data.repository.CrudRepository;

import lt2021.sventes.model.Holiday;

public interface HolidayRepository extends CrudRepository<Holiday, Integer> {

}