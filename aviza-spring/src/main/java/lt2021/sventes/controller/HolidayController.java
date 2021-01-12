package lt2021.sventes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import lt2021.sventes.model.Holiday;
import lt2021.sventes.model.HolidayType;
import lt2021.sventes.service.HolidayService;

@Controller
@CrossOrigin(origins = { "http://localhost:3000" })
@RequestMapping(path = "/holidays")
public class HolidayController {
	@Autowired
	private HolidayService holidayService;

	@PostMapping(path = "/add")
	public @ResponseBody String add(@RequestParam String name, @RequestParam String description,
			@RequestParam String image, @RequestParam boolean flag, @RequestParam HolidayType holidayType) {

		holidayService.add(name, description, image, flag, holidayType);

		return "Saved";
	}

	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Holiday> getAll() {

		return holidayService.getAll();
	}

	@DeleteMapping(path = "/{id}")
	public @ResponseBody String delete(Integer id) {

		holidayService.deleteById(id);

		return "Deleted";
	}
}