import React from "react";
import Country from "./Country";

const Countries = (props) => {
  // console.log(truncatedArray[0]);
  return (
    <section className="container-custom ">
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-8">
        {props.data.map((data) => (
          <Country
            key={data.name.common}
            name={data.name.common}
            flag={data.flags.png}
            continent={data.continents[0]}
            capital={data.capital?.[0]}
            population={data.population}
          />
        ))}
      </ul>
    </section>
  );
};

export default Countries;
