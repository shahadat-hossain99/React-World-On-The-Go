import React from "react";
import { use } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ CountriesPromise }) => {
  //   console.log(CountriesPromise);

  const countriesData = use(CountriesPromise);

  const countries = countriesData.countries;

  console.log(countries);

  return (
    <div>
      <h2>Countries : {countries.length}</h2>

      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
