import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white pt-96 px-28 gap-4 bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-4/12">{overview}</p>
      <div className="flex flex-wrap space-x-4">
        <button className="text-black bg-white p-5 w-44 text-xl font-bold h-20 rounded-md hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="text-white bg-gray-500 p-5 w-44 text-xl font-bold h-20 bg-opacity-50 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
