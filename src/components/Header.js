import { useState } from "react";
import { LOGO_URL, USER_PROFILE_URL } from "../utils/constants";
import SignOutPopup from "./SignOutPopup";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Header = () => {
  const [isPopUpOpen, setIsPopupOpen] = useState(false);

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const togglePopUp = () => {
    setIsPopupOpen(!isPopUpOpen);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        dispatch(
          addUser({
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsPopupOpen(false);
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
        setIsPopupOpen(false);
      });
  };

  return (
    <div className="absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-64" src={LOGO_URL} alt="logo" />
      <div className="flex pt-7 relative">
        {user && (
          <div>
            <img
              className="w-14 h-14 cursor-pointer"
              src={USER_PROFILE_URL}
              alt="user_logo"
              onClick={togglePopUp}
            />
            {isPopUpOpen && <SignOutPopup onSignOut={handleSignOut} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
