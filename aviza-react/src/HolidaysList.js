import React, { Component } from "react";
import axios from "axios";

export default class HolidaysList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holidays: [],
    };
    this.refreshHolidays = this.refreshHolidays.bind(this);
  }

  componentDidMount() {
    this.refreshHolidays();
  }

  refreshHolidays() {
    axios.get("/aviza-spring/holidays/all").then((response) => {
      console.log(response);
      this.setState({ holidays: response.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h3>Holidays</h3>
        <div className="row">
          {this.state.holidays.map((holiday, index) => {
            return (
              <div className="col-6" key={index}>
                <img
                  src={holiday.image}
                  className="card-img-top"
                  alt="pav"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{holiday.name}</h5>
                  <p className="card-text"> {holiday.description} </p>
                  <p className="card-text"> {holiday.holidayType} </p>
                  <a href="#0" className="btn btn-primary">
                    Details
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
