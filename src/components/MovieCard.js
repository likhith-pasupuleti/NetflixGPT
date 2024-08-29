import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-32 md:w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card"></img>
    </div>
  );
};

export default MovieCard;
