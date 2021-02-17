import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./works.module.css";
import WorkCard from "../../components/WorkCard";
import data from "../../posts.json";

const Works = ({}) => {
  const [works, setWorks] = useState(data.works);
  const [currCategory, setCurrCategory] = useState("All");
  const [numWorksShow, setNumWorksShow] = useState(3);
  const [hasMore, setHasMore] = useState(true);


  useEffect(()=>{
    if (numWorksShow >= Object.keys(works).length){
      setHasMore(false);
    }else{
      setHasMore(true);
    }
  }, [numWorksShow])

  useEffect(()=>{
    setNumWorksShow(3);
    if(3 >= Object.keys(works).length){
      setHasMore(false);
    }else{
      setHasMore(true);
    }
  }, [works])

  useEffect(()=>{    
    cateFilter(currCategory);
  }, [currCategory])

  const cateOnClick = (cate)=>{
    setCurrCategory(cate)
  }

  //function to filter work with category
  const cateFilter = (cate) =>{
    if (cate == 'All'){
      setWorks(data.works)
    }else{
      let newWorks = filterWorks(data.works, cate)
      setWorks(newWorks);
    }
  } 

  function categoryMenu() {
    const categories = ["All", "Complete", "Developing"];
    return (
      <div className="ui tabular menu">
        {categories.map(cate => {
          if (cate == currCategory) {
            return (
              <a
                className={`item blue active ${styles["link"]}`}
                onClick={() => cateOnClick(cate)}
              >
                {cate}
              </a>
            );
          }
          return (
            <a
              className={`item ${styles["link"]}`}
              onClick={() => cateOnClick(cate)}
            >
              {cate}
            </a>
          );
        })}
      </div>
    );
  }

  const loadMoreWorks = () => {
    const n = 3;
    
    setTimeout(() => {
      if(numWorksShow+n >= Object.keys(works).length){
        setNumWorksShow(Object.keys(works).length);
      }else{
        setNumWorksShow(prev=>prev+n);
      }
    }, 500);
  };

  const worksUI = () => {
    const UI = [];
    
    let i = 0;
    for (const [id, work] of Object.entries(works)) {
      UI.push(<WorkCard key={id} work={work} ID={id} />);

      i+=1;

      if(i >= numWorksShow){
        break;
      }
    }

    return UI;
  };

  const loadMoreButton = (
    <button
      className={`ui disabled inverted secondary button ${styles.loadMore}`}
    >
      Scroll to load..
    </button>
  );
  return (
    <div className={styles["work-container"]}>
      <h1 className="ui header">Recent Works</h1>

      {categoryMenu()}

      <InfiniteScroll
        dataLength={numWorksShow}
        next={loadMoreWorks}
        hasMore={hasMore}
        loader={loadMoreButton}
        className={styles.scroll}
      >
        <div className={styles["work-list"]}>{worksUI()}</div>
      </InfiniteScroll>
    </div>
  );
};

export default Works;



const filterWorks = (works, cate)=>{
  let results = {};

  for(const [key, value] of Object.entries(works)){
    if(value.category === cate){
      results[key] = value
    }
  }

  return results;
} 