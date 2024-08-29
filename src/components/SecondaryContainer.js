import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { languageConstants } from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const language = useSelector((store) => store.config.lang);
  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-[500px] relative z-30">
        <MovieList
          title={languageConstants[language].nowPlaying}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={languageConstants[language].topRated}
          movies={movies.topRatedMovies}
        />
        <MovieList
          title={languageConstants[language].upcoming}
          movies={movies.upcomingMovies}
        />
        <MovieList
          title={languageConstants[language].popular}
          movies={movies.popularMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
