import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("List:", movies);

  // Ensure movies is defined and is an array
  const movieList = Array.isArray(movies) ? movies : [];
  return (
    <div className="px-6">
      <h1 className="text-4xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
