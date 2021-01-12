import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
  render() {
    return (
      <div className="pt-3">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item p-1">
                <NavLink className="nav-link" to={"/"}>
                  Holidays
                </NavLink>
              </li>

              <li className="nav-item p-1">
                <NavLink className="nav-link" to={"/countries"}>
                  Countries
                </NavLink>
              </li>

              <li className="nav-item p-1">
                <NavLink className="nav-link" to={"/years"}>
                  Years
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
