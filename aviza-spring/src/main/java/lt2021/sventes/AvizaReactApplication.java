package lt2021.sventes;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import lt2021.sventes.repository.CountryRepository;

@SpringBootApplication
public class AvizaReactApplication {

	public static void main(String[] args) {
		SpringApplication.run(AvizaReactApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(CountryRepository repository) {
		return (args) -> {
			// repository.save(new Country("Lietuva", "flag.svg", "Gitaras"));
		};
	}

}
