import React from "react";

import "./home.css";
import Intro from "../components/intro/intro";
import Postlist from "../components/postlist/postlist";

const Home = () => {
  return (
    <div>
      <Intro />
      <div>
        <Postlist />
      </div>
    </div>
  );
};

export default Home;
