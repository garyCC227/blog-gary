import React, {useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

import Card from '../Card';
import styles from './CardList.module.css';

/*
 {
   'ID1':{
    "id": 1590948900,
    "title": "How to hide your API keys in React.\r",
    "author": {
      "owen":'url1',
    },
    "lastUpdateTime":"string",
    "date": "Jun 01 2020\r",
    "tag": ["api\r", 'react'],
    "filePath":'post1.md'
  },
   'ID2'
 }

 1. create fake json.file + .md
 2. filter tags
 3. finalise loadmore
 4. about me page template
   1. about me 
   2. experience
   4. contact page
 5.recent work
 6. dark/light mode


 1. react hook
 2. html/css
*/

const CardList = ({}) => {
  //hooks
  const [posts, setPosts] = useState([1]);

  const a = [1,1]
  // rendering
  // [1,1,1,1] + [1,1,1,1]
  // [1,1,1,1]

  const loadMorePosts = () => {
    setTimeout(() => {
      setPosts(prev => (
        prev.concat(Array(4).fill(1))
      ))  
    }, (1500));
    
  }

  const LoadMoreButton  = (
    <button className="ui pink inverted button">
      Loading...
    </button>
  )
  
  return (
    <div>
       
       <InfiniteScroll
          dataLength={posts.length}
          next={loadMorePosts}
          hasMore={true}
          loader={LoadMoreButton}
          className={styles.cards}
        >
          {
            posts.map(()=>{
              return <Card />
            })
          }
        </InfiniteScroll>
        
    </div>
  )
}

export default CardList;