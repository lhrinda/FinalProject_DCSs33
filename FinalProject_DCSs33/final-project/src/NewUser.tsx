//import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import "./style.css";

function NewUser() {
  return (
    <div
      id="page-div"
      className="h-lvh grid place-content-center bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="mb-[10px] mx-auto font-bold text-4xl text-white">
        Welcome to WatchWorthy!
      </div>
      <div
        id="container-div"
        className="flex flex-col bg-gray-700 text-black w-[600px] h-auto border-solid border-white border-2 my-auto"
      >
        <div id="signup-login-div" className="flex flex-row content-between">
          <Signup />
          <div className="signup-login-div">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
