package lt2021.sventes.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Holiday {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@Column(unique = true)
	private String name;

	private String description;

	private String image;

	private boolean flag;

	@Enumerated(EnumType.ORDINAL)
	private HolidayType holidayType;

	@OneToMany(mappedBy = "holiday")
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}

	public HolidayType getHolidayType() {
		return holidayType;
	}

	public void setHolidayType(HolidayType holidayType) {
		this.holidayType = holidayType;
	}

	public Set<NationalHoliday> getNationalHolidays() {
		return nationalHolidays;
	}

	public void setNationalHolidays(Set<NationalHoliday> nationalHolidays) {
		this.nationalHolidays = nationalHolidays;
	}

}