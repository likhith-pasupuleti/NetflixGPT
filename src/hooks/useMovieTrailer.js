import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  //console.log("trailer" + trailerKey);

  //get trailer
  const movieTrailer = async () => {
    //console.log(movieId);
    const movieData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await movieData.json();

    const getTrailer = json.results;
    //console.log(getTrailer);

    const filteredDataTrailer = getTrailer.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredDataTrailer.length
      ? filteredDataTrailer[0]
      : getTrailer[0];
    //console.log(trailer);
    dispatch(addTrailer({ trailer }));

    //console.log(filteredDataTrailer);
  };

  useEffect(() => {
    movieTrailer();
  }, []);
  return <div>useMovieTrailer</div>;
};

export default useMovieTrailer;
