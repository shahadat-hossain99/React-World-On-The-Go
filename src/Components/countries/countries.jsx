import React from "react";
import { use } from "react";
import Country from "../Country/Country";

const Countries = ({ CountriesPromise }) => {
  //   console.log(CountriesPromise);

  const countriesData = use(CountriesPromise);

  const countries = countriesData.countries;

  console.log(countries);

  return (
    <div>
      <h2>Countries : {countries.length}</h2>

      {countries.map((country) => (
        <Country key={country.cca3.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
