import React, { Component } from "react";
import axios from "axios";

export default class YearsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [],
    };
    this.refreshYears = this.refreshYears.bind(this);
  }

  componentDidMount() {
    this.refreshYears();
  }

  refreshYears() {
    axios
      .get("http://localhost:8080/aviza-spring/years/all")
      .then((response) => {
        console.log(response);
        this.setState({ years: response.data });
      });
  }
  render() {
    return (
      <div className="container">
        <h3>Years</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Number of days</th>
              <th>Eastern horoscope</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          {this.state.years.map((year, index) => {
            return (
              <tr key={index}>
                <td>{year.year}</td>
                <td>{year.numberOfDays} </td>
                <td>{year.horoscope} </td>
                <td>
                  <a href="#0">Details</a>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
