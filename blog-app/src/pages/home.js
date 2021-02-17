import React from "react";

import "./home.css";
import Intro from "../components/intro/intro";
import LabelList from "../components/LabelList";
import CardList from "../components/CardList";
import cardData from "../posts.json";
import FilterProvider from '../utils/store';

const Home = () => {
  //TODO: late host the databse in CLOUB with API?
  return (
    <div>
      <Intro />
      <div className="post-list">
        <h2 className="ui dividing header">RECENT POSTS</h2>
        <FilterProvider>  
          <LabelList tagsMeta={cardData.tags}/>
          <CardList blogs={cardData.blogs} tagsMeta={cardData.tags}/>
        </FilterProvider>
      </div>
    </div>
  );
};

export default Home;
