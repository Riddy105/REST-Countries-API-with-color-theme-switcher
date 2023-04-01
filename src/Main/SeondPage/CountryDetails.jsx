import React from "react";

const CountryDetails = (props) => {
  let allLanguagesToString;
  let allLanguages = [];
  let currency;
  let neighbouringCountries = [];
  const { pure, clickedCountry } = props.data;
  const {
    flags,
    name,
    population,
    continents,
    subregion,
    languages,
    currencies,
    tld,
    borders,
  } = clickedCountry;
  for (const key of Object.keys(languages)) {
    // I know there's probably a better way to handle this but this is the best way I can think of for getting all the languages out of 'languages' key
    allLanguages.push(languages[key]);
    allLanguagesToString = allLanguages.join(", ");
  }
  for (const key of Object.keys(currencies)) {
    currency = currencies[key].name;
  }
  borders?.forEach((code) => {
    pure.forEach((country) => {
      if (country.cca3 === code) {
        neighbouringCountries.push(country.name.common);
      }
    });
  });
  return (
    <div className="container-custom">
      <button
        className="py-2 px-10 shadow-custom2 mb-6 "
        onClick={props.togglePage}
      >
        Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={flags.png} alt="Country flag" />
        <div>
          <article className="flex flex-col gap-7 md:flex-row justify-between">
            <ul className="flex flex-col gap-2 font-extrabold">
              <li>Native Name: {name.common}</li>
              <li>Population: {population}</li>
              <li>Region: {continents[0]}</li>
              <li>Sub-Region: {subregion}</li>
            </ul>
            <ul className="flex flex-col gap-2 font-extrabold">
              <li>Top Level Domain: {tld[0]}</li>
              <li>Currencies: {currency}</li>
              <li>Languages: {allLanguagesToString}</li>
            </ul>
          </article>
          <div className="flex gap-1 mt-16">
            <p className="font-extrabold">Border Countries:</p>
            <div className="flex gap-1">
              {neighbouringCountries.map((country, index) => (
                <span
                  key={index}
                  className="font-light border-2 border-black/20 p-2 dark:border-white/50"
                  id={country}
                >
                  {country}
                </span>
              ))}
              {!borders && (
                <p className="font-extrabold">No borders were found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
