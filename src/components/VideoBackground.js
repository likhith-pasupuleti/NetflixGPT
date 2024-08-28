import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerKey = useSelector(
    (store) => store.movies?.trailerVideo?.trailer?.key
  );

  //custom hook
  useMovieTrailer({ movieId });

  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        className="w-full h-full aspect-video object-fill overflow-clip border-none"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey +
          "?&autoplay=1&mute=1&controls=0&modestbranding=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
