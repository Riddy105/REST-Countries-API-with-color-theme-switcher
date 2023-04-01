import React, { useEffect, useReducer, useState } from "react";
import Input from "./Input";
import Countries from "./Countries";
import CountryDetails from "./SeondPage/CountryDetails";

const countryReducerFn = (state, action) => {
  if (action.type === "INITIAL_RENDER") {
    return {
      pure: action.data,
      dynamic: action.data.slice(0, 8),
      clickedCountry: {},
    };
  }
  if (action.type === "FILTER_BY_SEARCH") {
    if (action.inputCapitalized === "") {
      return {
        ...state,
        dynamic: state.pure.slice(0, 8),
      };
    }
    if (action.inputCapitalized !== "") {
      return {
        ...state,
        dynamic: state.pure.filter((country) =>
          country.name.common.includes(action.inputCapitalized)
        ),
      };
    }
  }
  if (action.type === "FILTER_BY_CONTINENT") {
    const filteredCountries = state.pure.filter((country) =>
      country.continents[0].includes(action.continent)
    );
    return {
      ...state,
      dynamic: filteredCountries,
    };
  }
  if (action.type === "ROUTE") {
    return {
      ...state,
      clickedCountry: state.pure.find(
        (country) => country.name.common === action.name
      ),
    };
  }
};

const Main = () => {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [countryData, countryDispatchFn] = useReducer(countryReducerFn, {
    pure: [],
    dynamic: [],
    clickedCountry: {},
  });
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) =>
        countryDispatchFn({ type: "INITIAL_RENDER", data: data })
      );
  }, []);
  const togglePage = () => {
    setShowSecondPage((prev) => !prev);
  };
  const redirect = (name) => {
    setShowSecondPage((prev) => !prev);
    countryDispatchFn({ type: "ROUTE", name });
  };
  const filterBySearch = (input) => {
    const inputCapitalized =
      input.trim().length > 0
        ? input[0].toUpperCase() + input.slice(1).toLowerCase()
        : "";
    countryDispatchFn({
      type: "FILTER_BY_SEARCH",
      inputCapitalized,
    });
  };
  const filterByDropDown = (continent) => {
    countryDispatchFn({ type: "FILTER_BY_CONTINENT", continent });
  };

  const firstPage = (
    <>
      <Input onChange={filterBySearch} onDropDown={filterByDropDown} />
      <Countries data={countryData.dynamic} redirect={redirect} />
    </>
  );

  return (
    <main className="py-7 bg-grey-200 dark:bg-blue-200 dark:text-white min-h-screen">
      {!showSecondPage && firstPage}
      {showSecondPage && (
        <CountryDetails togglePage={togglePage} data={countryData} />
      )}
    </main>
  );
};

export default Main;

// Initialized a state which holds an object, object contains two main properties. One is the pure version of the array we are getting from our fetch
// and the other is an adultrated/mutable version (Filtered) based on input or any filtering mechanisms, dropdown also.

// Any argument passed into the dispatchFn is now being used as the second parameter in the reducerFn i.e passed into the 'action' parameter where you can
// then access it and update your state accordingly.
