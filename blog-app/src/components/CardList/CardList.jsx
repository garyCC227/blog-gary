import React, {useState, useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import Card from '../Card';
import {FilterContext} from "../../utils/store";
import styles from './CardList.module.css';

const CardList = ({blogs, tagsMeta}) => {
  //blogs are all blogs
  const n = 4 //shown post end at filteredblogs; n is how many more blogs we show when we loadmore
  const [end, setEnd] = useState(0);
  const {
    filteredBlogs:[filteredBlogs, setFilteredBlogs]
  } = React.useContext(FilterContext);
  const [posts, setPosts] = useState([]); //the posts we would show on UI
  const [loadOnce, setLoadOnce] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  //only run this when the application first load
  useEffect(()=>{
    if (!loadOnce){
      increaseFilteredEnd()
      setLoadOnce(true);
    }

  }, [loadOnce])

  useEffect(()=>{
    setPosts(filteredBlogs.slice(0, 4));
    setEnd(4);
    if (filteredBlogs.length > 4){
      setHasMore(true);
    }else{
      setHasMore(false);
    }
  }, [filteredBlogs])

  useEffect(()=>{
    console.log("here2");
    setPosts(filteredBlogs.slice(0, end));
  }, [end])

  const increaseFilteredEnd = () => {
    if (end+n > filteredBlogs.length){
      setEnd(filteredBlogs.length);
      setHasMore(false)
    }else{
      setEnd(prevEnd=>(prevEnd+=n));
    }
  }

  const loadMorePosts = () => {
    setTimeout(() => {
      setPosts(filteredBlogs.slice(0, end))
      increaseFilteredEnd()
    }, (500));
    
  }

  const LoadMoreButton  = (
    <button className={`ui pink inverted button ${styles['load-more']}`}>
      Scroll to load
    </button>
  )
  
  return (
    <div>
       
       <InfiniteScroll
          dataLength={posts.length}
          next={loadMorePosts}
          hasMore={hasMore}
          loader={LoadMoreButton}
          className={styles.scroll}
        >
          <div className={styles.cards}>
          {
            posts.map((blog, index)=>{
              return <Card key={index.toString()} blog={blog} tagsMeta={tagsMeta}/>
            })
          }
          </div>
        </InfiniteScroll>
        
    </div>
  )
}

export default CardList;