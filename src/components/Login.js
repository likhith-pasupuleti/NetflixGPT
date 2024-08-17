import Header from "./Header";
import { BACKGROUND_URL } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  const toggleSignInForm = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img src={BACKGROUND_URL} alt="bg" className="w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <form className="absolute w-3/12 h-3/4 bg-black bg-opacity-50 p-20 my-44 mx-auto left-0 right-0  text-white">
        <h1 className="font-bold text-4xl px-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {signIn || (
          <div className="relative">
            <input
              type="text"
              id="input"
              className="peer p-5 m-4 w-full rounded-md bg-black bg-opacity-10 border border-white"
            />
            <label
              htmlFor="input"
              className="absolute cursor-text left-9 top-9 text-gray-500 peer-focus:top-5 peer-focus:left-9 peer-focus:text-sm"
            >
              Full Name
            </label>
          </div>
        )}
        <div className="relative">
          <input
            type="text"
            id="email"
            className="peer p-5 m-4 w-full rounded-md bg-black bg-opacity-10 border border-white"
          />
          <label
            htmlFor="email"
            className="absolute cursor-text left-9 top-9 text-gray-500 peer-focus:top-5 peer-focus:left-9 peer-focus:text-sm"
          >
            Email or mobile number
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            id="password"
            className="peer p-5 m-4 w-full rounded-md bg-black bg-opacity-10 border border-white"
          />
          <label
            htmlFor="password"
            className="absolute cursor-text left-9 top-9 text-gray-500 peer-focus:top-5 peer-focus:left-9 peer-focus:text-sm"
          >
            Password
          </label>
        </div>

        <button className="p-4 m-4 bg-red-600 w-full font-bold rounded-md">
          {signIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 text-xl" onClick={toggleSignInForm}>
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
