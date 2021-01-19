import React from "react";

import styles from "./works.module.css";
import WorkCard from "../../components/WorkCard";
import data from "../../cardNote.json";

const Works = ({}) => {
  const works = data.works;
  // console.log(blogs[0], tags);

  const worksUI = () =>{
    const UI = []
    for (const [id, work] of Object.entries(works)){
      UI.push(<WorkCard key={id} work={work} ID={id} />)

    }

    return UI;
  }
  return (
    <div className={styles["work-container"]}>
      <h1 className="ui header">Recent Works</h1>
      <div className="ui tabular menu">
        <a className={`item ${styles['link']}`}>Home</a>
        <a className={`item ${styles['link']}`}>Messages</a>
        <a className={`item ${styles['link']}`}>Messages</a>
        <a className={`item ${styles['link']}`}>Messages</a>
        <a className={`item blue active ${styles['link']}`}>Friends</a>
      </div>
      <div className={styles["work-list"]}>
        {worksUI()}

      </div>
    </div>
  );
};

export default Works;
