import React from "react";

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-custom1">
      <div className="container-custom flex justify-between items-center">
        <h2 className="text-lg font-extrabold">Where in the world?</h2>
        <div className="flex gap-1 items-center font-semibold">
          <ion-icon name="moon-outline"></ion-icon>
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
