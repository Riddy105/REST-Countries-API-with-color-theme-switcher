import React, { useEffect, useReducer } from "react";
import Input from "./Input";
import { useState } from "react";
import Countries from "./Countries";

const countryReducerFn = (state, action) => {
  if (action.type === "INITIAL_RENDER") {
    return { pure: action.data, dynamic: action.data.slice(0, 8) };
  }
  if (action.type === "FILTER_BY_SEARCH") {
    return {
      ...state,
      dynamic: action.filteredCountries,
    };
  }
  if (action.type === "FILTER_BY_CONTINENT") {
    return {
      ...state,
      dynamic: action.filteredCountries,
    };
  }
};
const Main = () => {
  // const [countryData, setCountryData] = useState({
  //   pure: [],
  //   dynamic: [],
  // });
  const [countryData, countryDispatchFn] = useReducer(countryReducerFn, {
    pure: [],
    dynamic: [],
  });
  // useEffect(() => {
  //   const result = fetch("https://restcountries.com/v3.1/all");
  //   result
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setCountryData({
  //         pure: data,
  //         dynamic: data.slice(0, 8),
  //       })
  //     );
  // }, []);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) =>
        countryDispatchFn({ type: "INITIAL_RENDER", data: data })
      );
  }, []);
  // const filterBySearch = (input) => {
  //   const filteredCountries = countryData.pure.filter((country) =>
  //     country.name.common.includes(input)
  //   );
  //   input.length >= 1
  //     ? setCountryData((prev) => {
  //         return {
  //           ...prev,
  //           dynamic: filteredCountries,
  //         };
  //       })
  //     : setCountryData((prev) => {
  //         return {
  //           ...prev,
  //           dynamic: prev.pure.slice(0, 8),

  //         };
  //       });
  // };
  const filterBySearch = (input) => {
    const filteredCountries =
      input.length >= 1
        ? countryData.pure.filter((country) =>
            country.name.common.includes(input)
          )
        : countryData.pure.slice(0, 8);
    countryDispatchFn({
      type: "FILTER_BY_SEARCH",
      filteredCountries: filteredCountries,
    });
  };
  const filterByDropDown = (continent) => {
    const filteredCountries = countryData.pure.filter((country) =>
      country.continents[0].includes(continent)
    );
    countryDispatchFn({ type: "FILTER_BY_CONTINENT", filteredCountries });
  };
  return (
    <main className="py-7 bg-grey-200 dark:bg-blue-200 dark:text-white min-h-screen">
      <Input onChange={filterBySearch} onDropDown={filterByDropDown} />
      <Countries data={countryData.dynamic} />
    </main>
  );
};

export default Main;

// Initialized a state which holds an object, object contains two main properties. One is the pure version of the array we are getting from our fetch
// and the other is an adultrated version (Filtered) based on input or any filtering mechanisms, dropdown also.

// Any argument passed into the dispatchFn is now being used as the second parameter in the reducerFn i.e passed into the 'action' parameter where you can
// then access it.
