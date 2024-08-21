import React from "react";

const SignOutPopup = ({ onSignOut }) => {
  return (
    <div className="absolute top-16 right-0 bg-white shadow-lg p-4 rounded">
      <h1 className="font-bold">Logout</h1>
      <p className="w-56">Are you sure you want to sign out?</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={onSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOutPopup;
