import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const movieTrailer = async () => {
    const movieData = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await movieData.json();

    const getTrailer = json.results;

    const filteredDataTrailer = getTrailer.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredDataTrailer.length
      ? filteredDataTrailer[0]
      : getTrailer[0];
    dispatch(addTrailer({ trailer }));
  };

  useEffect(() => {
    if (!trailerVideo) movieTrailer();
  }, [movieTrailer,trailerVideo]);
  return <div>useMovieTrailer</div>;
};

export default useMovieTrailer;
