import Header from "./Header";
import { BACKGROUND_URL } from "../utils/constants";
import { useState } from "react";
import Validate from "../utils/Validate";
import { USER_PROFILE_URL } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [updateError, setUpdateError] = useState(null);
  const [emailValue, setEmailValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");
  const [fullNameValue, setFullNameValue] = useState("");

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  const signInValidation = () => {
    const message = Validate(emailValue, pwdValue);
    setUpdateError(message);

    if (message) return;

    if (!signIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, emailValue, pwdValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullNameValue,
            photoURL: USER_PROFILE_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setUpdateError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setUpdateError(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, emailValue, pwdValue)
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setUpdateError(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img
          src={BACKGROUND_URL}
          alt="bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signInValidation();
        }}
        className="absolute w-full md:w-3/12 h-3/4 bg-black bg-opacity-50 p-20 my-44 mx-auto left-0 right-0 text-white"
      >
        <h1 className="font-bold text-lg md:text-4xl px-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <div className="relative">
            <input
              type="text"
              id="name"
              className="peer p-5 m-4 w-full rounded-md bg-black bg-opacity-10 border border-white"
              value={fullNameValue}
              onChange={(e) => setFullNameValue(e.target.value)}
            />
            <label
              htmlFor="name"
              className={`absolute cursor-text left-9 ${
                fullNameValue ? "top-5 text-sm" : "top-9 text-gray-500"
              } peer-focus:top-5 peer-focus:left-9`}
            >
              Full Name
            </label>
          </div>
        )}
        <div className="relative">
          <input
            type="text"
            id="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className="peer p-5 m-4 w-full rounded-md bg-black bg-opacity-10 border border-white"
          />
          <label
            htmlFor="email"
            className={`absolute cursor-text left-9 ${
              emailValue ? "top-5 text-sm" : "top-9 text-gray-500"
            } peer-focus:top-5 peer-focus:left-9`}
          >
            Email or mobile number
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            id="password"
            value={pwdValue}
            className="peer p-5 m-4 md:w-full rounded-md bg-black bg-opacity-10 border border-white"
            onChange={(e) => setPwdValue(e.target.value)}
          />
          <label
            htmlFor="password"
            className={`absolute cursor-text left-9 ${
              pwdValue ? "top-5 text-sm" : "top-9 text-gray-500"
            } peer-focus:top-5 peer-focus:left-9`}
          >
            Password
          </label>
        </div>

        <p className="text-red-600">{updateError}</p>

        <button
          type="submit"
          className="p-4 m-4 bg-red-600 w-full font-bold rounded-md"
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 text-md md:text-xl" onClick={toggleSignInForm}>
          {signIn ? "New to Netflix? " : "Already a User? "}
          <span className="font-bold cursor-pointer">
            {signIn ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
