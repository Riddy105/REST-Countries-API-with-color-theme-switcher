import React, { useState } from "react";
import arrow from "../assets/Icons/chevron-down-outline.svg";

const Input = (props) => {
  const [dropDown, setdropDown] = useState(false);
  // const [region, setRegion] = useState();
  const dropDownHandler = () => {
    setdropDown((prev) => !prev);
  };

  // Incase we want to implement the continent selected in the box
  // const closeDropDown = (e) => {
  //   setdropDown((prev) => !prev);

  //   if (e.target.tagName == "LI") { // To avoid getting the textcontent of the whole ul element, we need just the li.
  //     setRegion(e.target.textContent);
  //   }
  // };
  const changeHandler = (e) => {
    const input = e.target.value;
    // const inputCapitalized =
    //   input.trim().length > 0
    //     ? input[0].toUpperCase() + input.slice(1).toLowerCase()
    //     : "";
    props.onChange(input);
  };
  const filterByContinentHandler = (e) => {
    setdropDown((prev) => !prev);
    props.onDropDown(e.target.textContent);
  };

  return (
    <section className="container-custom flex flex-col md:flex-row justify-between gap-3 mb-8">
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-searchIcon h-12 p-5 w-full md:w-[25%] bg-no-repeat placeholder:text-center shadow-custom1 dark:bg-blue-300"
        onChange={changeHandler}
      />
      <div className="w-full md:w-1/5 relative z-20 ">
        <button
          className="h-12 flex p-2 md:p-5 justify-between items-center bg-white dark:bg-blue-300 font-semibold w-1/2 md:w-full"
          onClick={dropDownHandler}
        >
          <p>Filter by region</p>
          <img src={arrow} alt="" className="w-5 h-5" />
        </button>

        {dropDown && (
          <ul
            className="p-5 bg-white dark:bg-blue-300 mt-4 font-semibold flex flex-col gap-2 cursor-pointer absolute top-[100%] left-0 w-1/2 md:w-full"
            onClick={filterByContinentHandler}
          >
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        )}
      </div>
      {dropDown && (
        <div
          className="overlay fixed top-0 left-0 w-screen h-screen bg-black/1"
          onClick={dropDownHandler}
        ></div>
      )}
    </section>
  );
};

export default Input;
