import React from "react";
// import logo from "../../assist/img/service-1.svg";
import styles from "./WorkCard.module.scss";

const WorkCard = ({ work, ID }) => {
  const logo = require(`../../assist/img/${work.logo}`);

  const tagsUI = work.tags.map((tag, index) => {
    return (
      <div key={index.toString()} className={`ui black label ${styles.tag}`}>
        {tag}
      </div>
    );
  });
  return (
    <div className={styles["workBody"]}>
      <div class={`ui card ${styles["item"]}`}>
        <div class={`content ${styles["content"]} `}>
          <div className="ui image">
            <img src={logo} alt="logo" width="80" height="80" />
          </div>

          <h3 className="ui header">{work.title}</h3>

          {<p> {work.desc}</p>}

          <a className="ui inverted button" href="https://www.w3schools.com/" style={{display:'none'}}>Visit the work!</a>
          <div className={`${styles.tags}`}>{tagsUI}</div>
        </div>
      </div>
    </div>
    //some git changes
  );
};

export default WorkCard;
