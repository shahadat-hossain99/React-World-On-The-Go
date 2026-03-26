import React from "react";
import "./country.css";

const Country = ({ country }) => {
  console.log(country.area.area);

  const handleVisited = () => {
    console.log("btn clicked");
  };

  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Country Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area} || Size:
        {country.area.area > 300000 ? " BIG COUNTRY" : " SMALL COUNTRY"}
      </p>

      <button onClick={handleVisited}>Not Visited</button>
    </div>
  );
};

export default Country;

/**
 * 1. inline css(style object)
 * 2.
 */
