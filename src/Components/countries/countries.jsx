import React from "react";
import { use } from "react";
import Country from "../Country/Country";
import "./countries.css";
import { useState } from "react";

const Countries = ({ CountriesPromise }) => {
  //   console.log(CountriesPromise);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountry = (country) => {
    console.log("I am visited country", country);

    const newVisitedCountries = [...visitedCountries, country];

    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    // console.log("Where are flags", flag);

    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(CountriesPromise);

  const countries = countriesData.countries;

  console.log(countries);

  return (
    <div>
      <h2>Countries : {countries.length}</h2>

      <h3>Total country Visited: {visitedCountries.length}</h3>

      <h3>Total Visited Flags: {visitedFlags.length}</h3>

      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visited-flags-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag} alt="" />
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
