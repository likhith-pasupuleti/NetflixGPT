import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { languageConstants } from "../utils/languageConstants";

const SignOutPopup = ({ onSignOut, onClose }) => {
  const language = useSelector((store) => store.config.lang);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popupRef}
      className="absolute top-16 right-0 bg-white shadow-lg p-4 rounded"
    >
      <h1 className="font-bold">{languageConstants[language].logOut}</h1>
      <p className="w-56">{languageConstants[language].logOutContent}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={onSignOut}
      >
        {languageConstants[language].signOut}
      </button>
    </div>
  );
};

export default SignOutPopup;
