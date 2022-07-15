import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="pt-5 grid grid-cols-2">
      <img src="./images/image/logo.png" alt="logo" />
      <div>
        <Link
          to="/"
          className="border-0 border-b-2 border-red-600 text-2xl mr-5"
        >
          Home
        </Link>
        <a href="#exercises" className="border-0 text-2xl">
          Exercises
        </a>
      </div>
    </div>
  );
};

export default Navbar;
