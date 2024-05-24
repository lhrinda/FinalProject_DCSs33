import React, { useState } from "react";
import "./style.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user with email " + user.email + " created!");
        updateProfile(user, { displayName: username }).then(() => {
          console.log(user.displayName);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div id="signup-div" className="signup-login-div">
      <input
        id="signup-username"
        className="signup-login-input"
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        id="signup-email"
        className="signup-login-input"
        type="email"
        placeholder="email address"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        id="signup-password"
        className="signup-login-input"
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={signupUser} className="signup-login-button">
        Signup
      </button>
    </div>
  );
}

export default Signup;
