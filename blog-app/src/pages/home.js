import React from "react";

import "./home.css";
import Intro from "../components/intro/intro";
import Postlist from "../components/postlist/postlist";
import Card from "../components/Card";
import LabelList from "../components/LabelList";

const Home = () => {
  return (
    <div>
      <Intro />
      <div class="post-list">
        <h2 class="ui dividing header">RECENT POSTS</h2>
        <LabelList />
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* <div>
        <Postlist />
      </div> */}
    </div>
  );
};

export default Home;
