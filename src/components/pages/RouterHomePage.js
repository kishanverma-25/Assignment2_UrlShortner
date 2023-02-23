import React, { useState, useEffect } from "react";

import Login from "../Login/Login";
import Home from "../Home/Home";
import MainHeader from "../MainHeader/MainHeader";
import AuthContext from "../../store/auth-context";

const RouterHomePage = () => {
  const [user, setUser] = useState("");
  const [image, setImage] = useState("");
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
    setUser(data.given_name);
    setImage(data.picture);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <MainHeader picture={image} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} onName={nameHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} name={user} />}
      </main>
    </AuthContext.Provider>
  );
};

export default RouterHomePage;
