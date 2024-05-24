import React, { useState } from "react";
import "./style.css";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User successfully logged in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div id="login-div" className="my-auto">
      <input
        id="input-email"
        className="signup-login-input"
        type="email"
        placeholder="email address"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        id="input-password"
        className="signup-login-input"
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={loginUser} className="signup-login-button">
        Login
      </button>
    </div>
  );
}

export default Login;
