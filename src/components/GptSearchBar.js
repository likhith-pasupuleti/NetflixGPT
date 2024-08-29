import { useState } from "react";
import { languageConstants } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  //search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchMovie +
      "Only give me names of 10 movies, comma separated like the example result given ahead. Example Result: Kalki 2898AD, Saripodha Sanivaram, Saalar, Bahubali";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) return;

    const gptMovieList = gptResults?.choices[0]?.message?.content.split(",");

    const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResults({
        movieNames: gptMovieList,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[70%] md:pt-[5%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 grid grid-cols-12 relative rounded-lg"
      >
        <div className="pl-3 relative col-span-9">
          <input
            type="text"
            id="searchMovie"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
            className="peer w-full h-20 rounded-lg font-sans text-white text-2xl bg-black bg-opacity-80 border border-white p-4 focus:outline-none  focus:ring-white"
            placeholder=" "
          />
          <label
            htmlFor="searchMovie"
            className={`absolute left-4 transform transition-all duration-200 ease-in-out ${
              searchMovie ? "text-xs top-1" : "text-lg top-4 text-gray-500"
            } peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-1 peer-focus:text-white`}
          >
            {languageConstants[langKey].gptSearchPlaceHolder}
          </label>
        </div>

        <button
          className="px-2 md:px-5 h-20 m-4 bg-red-700 text-white rounded-lg col-span-3 -mt-0"
          onClick={handleGptSearchClick}
        >
          {languageConstants[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
