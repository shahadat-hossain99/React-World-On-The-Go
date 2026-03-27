import React from "react";
import { use } from "react";
import Country from "../Country/Country";
import "./countries.css";
import { useState } from "react";

const Countries = ({ CountriesPromise }) => {
  //   console.log(CountriesPromise);

  const [visitedCountry, setvisitedCountry] = useState([]);

  const handlevisitedCountry = (country) => {
    console.log("I am visited country", country);
  };

  const countriesData = use(CountriesPromise);

  const countries = countriesData.countries;

  console.log(countries);

  return (
    <div>
      <h2>Countries : {countries.length}</h2>

      <h3>Total country Visited: </h3>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handlevisitedCountry={handlevisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
