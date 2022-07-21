import React from 'react';
import { Link } from 'react-router-dom';

const ExercisesCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}`}
      className="border-0 border-t-2 border-red-600 w-[300px] xl:w-[400px] m-auto bg-white hover:scale-105 transition: duration-300 rounded-md"
    >
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="w-full"
      />
      <p className="text-2xl font-bold p-4">{exercise.name}</p>
    </Link>
  );
};

export default ExercisesCard;
