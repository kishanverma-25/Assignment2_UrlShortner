import React from "react";

import Card from "../UI/Card/Card";
import HomeFinal from "../URLshortnerCode/HomeFinal";
import classes from "./Home.module.css";

const Home = (props) => {
  const name = `Welcome ${props.name} !`;
  return (
    <Card className={classes.home}>
      <h1>{name}</h1>
      <HomeFinal />
    </Card>
  );
};

export default Home;
