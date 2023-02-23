import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        {ctx.isLoggedIn && (
          <li>
            {props.picture && (
              <button onClick={ctx.onLogout}>
                <span>
                  <img src={props.picture} width="40" height="40" alt="" />
                </span>
                <b>Logout</b>
              </button>
            )}
            {!props.picture && <button onClick={ctx.onLogout}>Logout</button>}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
