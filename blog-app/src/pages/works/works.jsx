import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./works.module.css";
import WorkCard from "../../components/WorkCard";
import data from "../../cardNote.json";

const Works = ({}) => {
  const works = data.works;
  // console.log(blogs[0], tags);


  const loadMoreWorks = ()=>{
    console.log('loading');
  }

  const worksUI = () => {
    const UI = [];
    for (const [id, work] of Object.entries(works)) {
      UI.push(<WorkCard key={id} work={work} ID={id} />);
    }

    return UI;
  };

  const loadMoreButton = (
    <button className={`ui inverted secondary button ${styles.loadMore}`}>
      Scroll to load..
    </button>
  );
  return (
    <div className={styles["work-container"]}>
      <h1 className='ui header'>Recent Works</h1>
      <div className='ui tabular menu'>
        <a className={`item ${styles["link"]}`}>Web App</a>
        <a className={`item ${styles["link"]}`}>Coding</a>
        <a className={`item ${styles["link"]}`}>API</a>
        <a className={`item blue active ${styles["link"]}`}>ML</a>
      </div>

      <InfiniteScroll
        dataLength={Object.keys(works).length}
        next={loadMoreWorks}
        hasMore={true}
        loader={loadMoreButton}
        className={styles.scroll}
      >
        <div className={styles["work-list"]}>{worksUI()}</div>
      </InfiniteScroll>
    </div>
  );
};

export default Works;
