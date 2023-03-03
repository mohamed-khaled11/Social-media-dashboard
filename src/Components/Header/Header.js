import React from "react";
import "./Header.css";
const Header = ({btnSwitch}) => {
  return (
    <div className="header text-white dark:text-black p-5 pb-[200px] grid sm:grid-cols-2 xs:grid-cols-1 bg-[#20222f] dark:bg-[#f8f9fe] ">
      <div className="left-section">
        <h1 className="text-3xl font-bold">
          Social Media Dashboard
        </h1>
        <p className="text-xl text-gray-500">Total Followers: 23,004</p>
      </div>
      {/* right section*/}
      <div className="right-section flex items-center justify-center">
        <p className="text-xl font-bold">Dark Mode</p>
        <label class="switch">
          <input onChange={btnSwitch} type="checkbox"></input>
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  );
};
export default Header;
