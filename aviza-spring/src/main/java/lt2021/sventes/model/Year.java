package lt2021.sventes.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Year {
	@Id
	private Integer year;

	private Integer numberOfDays;

	private String horoscope;

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public Integer getNumberOfDays() {
		return numberOfDays;
	}

	public void setNumberOfDays(Integer numberOfDays) {
		this.numberOfDays = numberOfDays;
	}

	public String getHoroscope() {
		return horoscope;
	}

	public void setHoroscope(String horoscope) {
		this.horoscope = horoscope;
	}

}