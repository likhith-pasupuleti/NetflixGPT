import { useState, useEffect } from "react";
import {
  LOGO_URL,
  SUPPORTED_LANGUAGES,
  USER_PROFILE_URL,
} from "../utils/constants";
import SignOutPopup from "./SignOutPopup";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { onAuthStateChanged } from "firebase/auth";
import { languageConstants } from "../utils/languageConstants";

const Header = () => {
  const [isPopUpOpen, setIsPopupOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const language = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const show_Gpt_Search = useSelector((store) => store.gpt.showGptSearch);

  const togglePopUp = () => {
    setIsPopupOpen(!isPopUpOpen);
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        dispatch(
          addUser({
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setIsPopupOpen(false); // Close the popup after successful sign out
      })
      .catch((error) => {
        navigate("/error");
        setIsPopupOpen(false); // Close the popup in case of an error
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between bg-black md:bg-transparent">
      <img
        className="w-64 mx-auto md:mx-0 cursor-pointer"
        src={LOGO_URL}
        alt="logo"
        onClick={() => navigate("/browse")}
      />
      <div className="flex pr-8 md:pt-7 relative">
        {user && (
          <div className="flex p-2">
            <select
              className="pl-4 md:p-2 bg-gray-600 text-white font-bold rounded-lg hover:bg-slate-400 cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
            <button
              onClick={handleGptSearchClick}
              className="px-6 mx-1 md:mx-4 text-white font-bold bg-red-500 rounded-md -top-10 hover:bg-red-400"
            >
              {show_Gpt_Search
                ? languageConstants[language].homePage
                : languageConstants[language].gptSearch}
            </button>
            <img
              className="w-16 h-16 cursor-pointer rounded-lg"
              src={USER_PROFILE_URL}
              alt="user_logo"
              onClick={togglePopUp}
            />
            {isPopUpOpen && (
              <SignOutPopup
                onSignOut={handleSignOut}
                onClose={handleClosePopup}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
