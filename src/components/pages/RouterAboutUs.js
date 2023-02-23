import React, { useState, useEffect } from "react";

import MainHeader from "../MainHeader/MainHeader";
import AuthContext from "../../store/auth-context";
import Login from "../Login/Login";
import AboutUs from "../AboutUs/AboutUs";

const RouterAboutUs = () => {
  const [image, setImage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const nameHandler = (data) => {
    setImage(data.picture);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <MainHeader picture={image} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} onName={nameHandler} />}
        {isLoggedIn && <AboutUs />}
      </main>
    </AuthContext.Provider>
  );
};

export default RouterAboutUs;
