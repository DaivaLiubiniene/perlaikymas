package lt2021.sventes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt2021.sventes.model.Country;
import lt2021.sventes.repository.CountryRepository;

@Service
public class CountryService {
	@Autowired
	private CountryRepository countryRepository;

	public void add(String name, String flag, String president) {

		Country l = new Country();
		l.setName(name);
		l.setFlag(flag);
		l.setPresident(president);

		countryRepository.save(l);
	}

	public Iterable<Country> getAll() {
		return countryRepository.findAll();
	}

}
