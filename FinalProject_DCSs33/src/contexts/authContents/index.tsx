import React, { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.js";

import { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLogedIn, setUserLogedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLogedIn(true);
    } else {
      setCurrentUser(null);
      setUserLogedIn(false);
    }
    setLoading(false);
  }

  const value = {
    currentUser,
    userLogedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      (!loading && children)
    </AuthContext.Provider>
  );
}
