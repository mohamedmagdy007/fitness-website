import React from "react";
import Navbar from "./Navbar";
// import { bannerImg } from "./images/image/banner.png";
const Header = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 z-10 relative">
        <div className="flex flex-col">
          <Navbar />
          <div className="grow flex flex-col justify-center mt-4 md:mt-0">
            <p className="text-red-500 text-3xl font-bold ">Fitness Club</p>
            <p className="text-5xl font-bold my-5">
              Sweat, Smile <br />
              And Repeat
            </p>
            <p className="text-xl mb-5">
              Check out the most effective exercises personalized to you
            </p>
            <button className="bg-red-600 text-2xl text-white py-3 px-5 w-fit">
              Explore Exercises
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={"./images/image/banner.png"} alt="banner" />
        </div>
      </div>
      <p className="text-banner">Exercises</p>
    </>
  );
};

export default Header;
