import React from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Logout() {
  const logoutUser = (event) => {
    signOut(auth)
      .then(() => {
        console.log("User successfully logged out");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <button onClick={logoutUser} className="signup-login-button mt-5">
      Logout
    </button>
  );
}

export default Logout;
