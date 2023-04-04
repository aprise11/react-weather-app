import React from "react";

import "./App.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="search-form" className="mb-2">
        <div className="row search-city">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control search-input"
              id="city-input"
            />
          </div>
          <div className="col-3 p-0">
            <input type="submit" className="btn btn-light" value="Search" />
          </div>
        </div>
      </form>
    </div>
  );
}
