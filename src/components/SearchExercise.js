import React, { useEffect, useState } from 'react';
import ScrollHorizontal from './ScrollHorizontal';
import { SearchIcon } from './SVG/iconSvg';
import { useSelector, useDispatch } from 'react-redux';
import { getexercise } from '../Store/Actions/Actions';
import Exercises from './Exercises';
const SearchExercise = () => {
  const { isLoading, exercises } = useSelector((state) => state.exercises);
  const [search, setSearch] = useState('');
  const [searchExercise, setSearchExercise] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getexercise());
  }, [dispatch]);
  const SearchHandler = () => {
    if (search) {
      const searchExercise = exercises.filter((ex) => ex.includes(search));
      setSearchExercise(searchExercise);
      setSearch('');
    }
  };
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button
          className="bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-400"
          onClick={SearchHandler}
        >
          Search
        </button>
      </div>

      <ScrollHorizontal exercises={exercises} isLoading={isLoading} />
      <Exercises searchExercise={searchExercise} exercises={exercises} />
    </div>
  );
};

export default SearchExercise;
