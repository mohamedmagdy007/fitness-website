import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExercises } from '../Store/Actions/Actions';
import { Pagination } from '@mui/material';
import ExercisesCard from './ExercisesCard';

const Exercises = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  const { isLoading, AllExercises } = useSelector(
    (state) => state.AllExercises
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllExercises());
  }, [dispatch]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = AllExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-8">Showing Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 mb-8">
        {currentExercises.map((exercises, ind) => (
          <ExercisesCard exercise={exercises} key={ind} />
        ))}
      </div>

      <Pagination
        color="standard"
        shape="rounded"
        defaultPage={1}
        count={Math.ceil(AllExercises.length / exercisesPerPage)}
        page={currentPage}
        onChange={paginate}
        size="large"
      />
    </div>
  );
};

export default Exercises;
