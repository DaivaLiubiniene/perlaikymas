package lt2021.sventes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt2021.sventes.model.Year;
import lt2021.sventes.repository.YearRepository;

@Service
public class YearService {
	@Autowired
	private YearRepository yearRepository;

	public void add(Integer year, Integer numberOfDays, String horoscope) {

		Year y = new Year();
		y.setYear(year);
		y.setNumberOfDays(numberOfDays);
		y.setHoroscope(horoscope);

		yearRepository.save(y);
	}

	public Iterable<Year> getAll() {
		return yearRepository.findAll();
	}

}
