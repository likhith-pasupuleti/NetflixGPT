import React from "react";
import { useSelector } from "react-redux";
import { languageConstants } from "../utils/languageConstants";

const VideoTitle = ({ title, overview }) => {
  const language = useSelector((store) => store.config.lang);

  return (
    <div className="w-screen aspect-video absolute text-white pl-7 pt-36 md:pt-96 px-14 md:px-28 gap-4 bg-gradient-to-r from-black">
      <h1 className="font-bold text-md md:text-6xl">
        {languageConstants[language].title}
      </h1>
      <p className="hidden md:inline-block py-6 text-sm md:text-lg w-full md:w-4/12">
        {languageConstants[language].overview}
      </p>
      <div className="flex flex-wrap space-x-4">
        <button className="text-black bg-white p-3 md:p-5 w-24 md:w-44 text-sm md:text-xl font-bold h-10 md:h-20 rounded-md hover:bg-opacity-70">
          {languageConstants[language].play}
        </button>
        <button className="hidden md:inline-block text-white bg-gray-500 p-5 w-10 md:w-44 text-xl font-bold h-20 bg-opacity-50 rounded-md">
          {languageConstants[language].moreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
