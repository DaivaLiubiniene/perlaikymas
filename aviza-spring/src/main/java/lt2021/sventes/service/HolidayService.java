package lt2021.sventes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt2021.sventes.model.Holiday;
import lt2021.sventes.model.HolidayType;
import lt2021.sventes.repository.HolidayRepository;

@Service
public class HolidayService {
	@Autowired
	private HolidayRepository holidayRepository;

	public void add(String name, String description, String image, boolean flag, HolidayType holidayType) {
		Holiday h = new Holiday();
		h.setName(name);
		h.setDescription(description);
		h.setImage(image);
		h.setFlag(flag);
		h.setHolidayType(holidayType);

		holidayRepository.save(h);
	}

	public Iterable<Holiday> getAll() {
		return holidayRepository.findAll();
	}

	public void deleteById(Integer id) {
		holidayRepository.deleteById(id);

	}

}
