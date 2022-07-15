import React, { useEffect } from "react";
import ScrollHorizontal from "./ScrollHorizontal";
import { SearchIcon } from "./SVG/iconSvg";
import { useSelector, useDispatch } from "react-redux";
import { getexercise } from "../Store/Actions/Actions";
const SearchExercise = () => {
  //   const { bodyList } = useSelector((state) => state.exercises);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getexercise());
  }, [dispatch]);
  return (
    <div>
      <p className="text-5xl font-bold text-center mt-2">
        Awesome Exercises You <br />
        Should Know
      </p>
      <div className="grid grid-cols-[60%,20%]  md:grid-cols-[35%,9%] justify-center mt-8">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon />
          </span>
          <input
            className="input-search"
            placeholder="Search exercises"
            type="text"
            name="search"
          />
        </label>
        <button className="bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-400">
          Search
        </button>
      </div>

      <ScrollHorizontal />
    </div>
  );
};

export default SearchExercise;
