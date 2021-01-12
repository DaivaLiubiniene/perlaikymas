import React, { Component } from "react";
import axios from "axios";

export default class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
    this.refreshCountries = this.refreshCountries.bind(this);
  }

  componentDidMount() {
    this.refreshCountries();
  }

  refreshCountries() {
    axios.get("/aviza-spring/countries/all").then((response) => {
      console.log(response);
      this.setState({ countries: response.data });
    });
  }
  render() {
    return (
      <div className="container">
        <h3>Countries</h3>
        <div className="row">
          {this.state.countries.map((country, index) => {
            return (
              <div className="col-6" key={index}>
                <img
                  src={country.flag}
                  className="card-img-top"
                  alt="pav"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{country.name}</h5>
                  <p className="card-text"> President: {country.president} </p>
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
