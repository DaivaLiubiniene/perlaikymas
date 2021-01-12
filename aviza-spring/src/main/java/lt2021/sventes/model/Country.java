package lt2021.sventes.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Country {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column(unique = true)
	private String name;

	private String flag;

	private String president;

	@OneToMany(mappedBy = "country")
	private Set<NationalHoliday> nationalHolidays;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getPresident() {
		return president;
	}

	public void setPresident(String president) {
		this.president = president;
	}

	public Set<NationalHoliday> getNationalHolidays() {
		return nationalHolidays;
	}

	public void setNationalHolidays(Set<NationalHoliday> nationalHolidays) {
		this.nationalHolidays = nationalHolidays;
	}

}