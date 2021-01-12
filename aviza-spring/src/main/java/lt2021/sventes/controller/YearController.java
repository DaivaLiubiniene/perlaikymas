package lt2021.sventes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import lt2021.sventes.model.Year;
import lt2021.sventes.service.YearService;

@Controller
@CrossOrigin(origins = { "http://localhost:3000" })
@RequestMapping(path = "/years")
public class YearController {
	@Autowired
	private YearService yearService;

	@PostMapping(path = "/add")
	public @ResponseBody String add(@RequestParam Integer year, @RequestParam Integer numberOfDays,
			@RequestParam String horoscope) {

		yearService.add(year, numberOfDays, horoscope);

		return "Saved";
	}

	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Year> getAll() {

		return yearService.getAll();
	}

}