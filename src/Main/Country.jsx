import React from "react";

const Country = (props) => {
  return (
    <li className="bg-white dark:bg-blue-300 shadow-custom1 rounded-md overflow-hidden">
      <img
        src={props.flag}
        alt="Country flag"
        className="md:h-[180px] w-full object-cover"
      />
      <div className="text-box p-5">
        <h2 className="font-extrabold">{props.name}</h2>
        <div className="flex flex-col gap-2 mt-4">
          <p>{`Population: ${props.population}`}</p>
          <p>{`Region: ${props.continent}`}</p>
          <p>{`Capital: ${props.capital}`}</p>
        </div>
      </div>
    </li>
  );
};

export default Country;
