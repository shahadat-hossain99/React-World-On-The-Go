import React from "react";
import "./country.css";
import { useState } from "react";

const Country = ({ country }) => {
  //   console.log(country.area.area);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // console.log("btn clicked");
    // setVisited(true);

    //! system--01
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // ! system--02
    // setVisited(visited ? false : true);

    // ! system --03
    setVisited(!visited);
  };

  return (
    // <div className={`country ${visited ? "country-visited" : "country-non"}`}>
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Country Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area} || Size:
        {country.area.area > 300000 ? " BIG COUNTRY" : " SMALL COUNTRY"}
      </p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;

/**
 * 1. inline css(style object)
 * 2.
 */
