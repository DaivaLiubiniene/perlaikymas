package lt2021.sventes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import lt2021.sventes.model.Country;
import lt2021.sventes.service.CountryService;

@Controller
@CrossOrigin(origins = { "http://localhost:3000" })
@RequestMapping(path = "/countries")
public class CountryController {

	@Autowired
	private CountryService countryService;

	@PostMapping(path = "/add")
	public @ResponseBody String add(@RequestParam String name, @RequestParam String flag,
			@RequestParam String president) {
		countryService.add(name, flag, president);

		return "Saved";
	}

	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Country> getAll() {

		return countryService.getAll();
	}
}