import React from "react";

// import logo from "../../assist/img/service-1.svg";
import styles from "./WorkCard.module.scss";
import data from "../../cardNote.json";

const WorkCard = ({ work, ID }) => {
  const logo = require(`../../assist/img/${work.logo}`);

  const tagsUI = work.tags.map((tag, index)=>{
      return (
          <div key={index.toString()} className={`ui black label ${styles.tag}`}>
              {tag}
          </div>
      );
  })
  return (
    <div class={`ui card ${styles["item"]}`}>
      <div class={`content ${styles["content"]} `}>
        <div className="ui image">
          <img src={logo} alt="logo" width="80" height="80" />
        </div>

        <h3 className="ui header">{work.title}</h3>

        {/* <p> {work.desc}</p> */}
        <div className={`${styles.tags}`}>
          {tagsUI}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
