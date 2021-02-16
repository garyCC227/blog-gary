import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";

import styles from "./Card.module.css";

const Card = ({ blog, tagsMeta }) => {
  let history = useHistory();

  const redirect = (id) => {
    history.push(`/post/${id}`);
  };


  const showCardTags = blog['tag'].map((label) => {
      return (<a
        key={tagsMeta[label].id}
        className={`${tagsMeta[label].className} ${styles["my-label"]}`}
      >
        {label}
      </a>)
  })
  
/*   useEffect(()=>{
    //app.database().ref('comments')
    //.get()
    //.then(res=>setComments(res.val()['Comments']))
    
    // let ref= app.database().ref('comments/Comments')
    // ref.child("ID4")  
    // .set({
    //     "author":"tester2",
    //     "date":new Date().toISOString(),
    //     "content":"Comment2      dasdsadasdasdsas",
    //     "child":[3]
    // })
    console.log("check")
    app.database().ref('blogs')
    .get()
    .then(res=>console.log(res.val()))
    

  }, []) */


  return (
    <div className={`ui card ${styles["card-size"]}`} onClick={()=>redirect(blog.id)}>
     
      <div className='content'>
        <div>
          {showCardTags}
        </div>
        <div className={styles["my-header"]}>
          {blog.title}
        </div>

        <div className={styles["my-desc"]}>
          <p>
            {blog.content}
            {console.log("check")}
          </p>
        </div>

        <div className='header'>
          <img
            className='left floated ui image'
            width='50'
            height='50'
            src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmMmJjMGY7fS5jbHMtMiwuY2xzLTh7ZmlsbDojZmZmO30uY2xzLTJ7b3BhY2l0eTowLjM7fS5jbHMtM3tmaWxsOiM1MTU1NzA7fS5jbHMtNHtmaWxsOiMzOTNjNTQ7fS5jbHMtNXtmaWxsOiNmZmQ4Yzk7fS5jbHMtMTAsLmNscy0xMiwuY2xzLTYsLmNscy03LC5jbHMtOXtmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHg7fS5jbHMtNntzdHJva2U6IzM5M2M1NDt9LmNscy0xMCwuY2xzLTcsLmNscy05e3N0cm9rZTojNTE1NTcwO30uY2xzLTd7b3BhY2l0eTowLjE7fS5jbHMtOXtvcGFjaXR5OjAuNDt9LmNscy0xMXtmaWxsOiNmOGRjMjU7fS5jbHMtMTJ7c3Ryb2tlOiNmYmMwYWE7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZS8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSI2NCIgY3k9IjY0IiByPSI2MCIvPjxjaXJjbGUgY2xhc3M9ImNscy0yIiBjeD0iNjQiIGN5PSI2NCIgcj0iNDgiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik02NCwxMjQuMWE1OS43OCw1OS43OCwwLDAsMCw0MC0xNS4yOGwtMi4zOS01LjY4Yy0xLjcxLTQtNi4yMi02LjY0LTExLjI5LTYuNjRIMzcuNjljLTUuMDcsMC05LjU4LDIuNjYtMTEuMjksNi42NEwyNCwxMDguODJBNTkuNzgsNTkuNzgsMCwwLDAsNjQsMTI0LjFaIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNOTUuMjUsNjAuNDNjMCw0LjM4LjQ1LDcuOTMtMy45Myw3LjkzYTcuOTMsNy45MywwLDEsMSwwLTE1Ljg2Qzk1LjcsNTIuNSw5NS4yNSw1Ni4wNSw5NS4yNSw2MC40M1oiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00NC42MSw2MC40M2E3LjkzLDcuOTMsMCwwLDEtNy45Myw3LjkzYy00LjM4LDAtMy45My0zLjU1LTMuOTMtNy45M3MtLjQ1LTcuOTMsMy45My03LjkzQTcuOTMsNy45MywwLDAsMSw0NC42MSw2MC40M1oiLz48cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik02NCw5NS4zN0EyOC4zMSwyOC4zMSwwLDAsMSwzNS42OCw2Ny4wNVY1Mi40M2MwLTE1LjY0LDEyLjY4LTI1LjMyLDI4LjMyLTI1LjMyczI4LjMyLDkuNjgsMjguMzIsMjUuMzJWNjcuMDVBMjguMzEsMjguMzEsMCwwLDEsNjQsOTUuMzdaIi8+PHBhdGggY2xhc3M9ImNscy02IiBkPSJNNTYuNDEsODIuMDdBLjkxLjkxLDAsMCwxLDU3LjI1LDgxaDEzLjVhLjkxLjkxLDAsMCwxLC44NCwxLjA3Ii8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNOTAuOTEsNjdBMTMuMzQsMTMuMzQsMCwwLDAsNzkuMDksODAuMzR2NC40OSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTM3LjA5LDY3QTEzLjM0LDEzLjM0LDAsMCwxLDQ4LjkxLDgwLjM0djQuNDkiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik0zNSw2Ny41M2wyNy42OCw2LjIyYTYuMTQsNi4xNCwwLDAsMCwyLjYzLDBMOTMsNjcuNTNWMjIuN2ExLDEsMCwwLDAtMS42LS44bC0xMCw3LjQ1cy02LjEyLTUuOC0xNy4zOS01LjhBMjcuODMsMjcuODMsMCwwLDAsNDUuOTIsMzBsLTkuMjctNy45YTEsMSwwLDAsMC0xLjY1Ljc2WiIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTQ2LjEzLDU3Ljc1LDU1Ljg4LDYwYTUsNSwwLDEsMS05Ljc1LTIuMjFaIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTQiIGN4PSI1MSIgY3k9IjU5LjAyIiByPSIyLjcyIi8+PGxpbmUgY2xhc3M9ImNscy05IiB4MT0iNTYuMzYiIHgyPSI0NS42NCIgeTE9IjYwLjA3IiB5Mj0iNTcuNjMiLz48bGluZSBjbGFzcz0iY2xzLTEwIiB4MT0iNTYuMzYiIHgyPSI0NS42NCIgeTE9IjU5LjA3IiB5Mj0iNTYuNjMiLz48cGF0aCBjbGFzcz0iY2xzLTExIiBkPSJNNzgsMTExLjgyYS41LjUsMCwwLDAtLjI2LS45M0g2OS42NWEuNy43LDAsMCwwLS42NS40M2gwYTMuMTUsMy4xNSwwLDAsMS0yLjMsMS44OWwtMSwuMjFhLjM2LjM2LDAsMCwxLS40My0uMjlMNjUsMTExLjcyYS4wOC4wOCwwLDAsMC0uMTUsMGwtLjI4LjY2YTIuMzcsMi4zNywwLDAsMC0xLjA2LDBsLS4yOC0uNjZhLjA4LjA4LDAsMCwwLS4xNSwwbC0uMjcsMS40MWEuMzYuMzYsMCwwLDEtLjQzLjI5bC0xLS4yMWEzLjE1LDMuMTUsMCwwLDEtMi4zLTEuODloMGEuNy43LDAsMCwwLS42NS0uNDNINTAuMjlhLjUuNSwwLDAsMC0uMjYuOTMsNS42Nyw1LjY3LDAsMCwxLDIuODUsNC43Mi40OS40OSwwLDAsMCwuNTYuNDksMTMuMjcsMTMuMjcsMCwwLDEsNS44OS40Niw5LjE5LDkuMTksMCwwLDEsNC4yNiwzLjQxLjUuNSwwLDAsMCwuODIsMCw5LjE5LDkuMTksMCwwLDEsNC4yNi0zLjQxLDEzLjI3LDEzLjI3LDAsMCwxLDUuODktLjQ2LjQ5LjQ5LDAsMCwwLC41Ni0uNDlBNS42Nyw1LjY3LDAsMCwxLDc4LDExMS44MloiLz48cGF0aCBjbGFzcz0iY2xzLTgiIGQ9Ik04MS44Nyw1Ny43NSw3Mi4xMiw2MGE1LDUsMCwxLDAsOS43NS0yLjIxWiIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iNzcuMDYiIGN5PSI1OS4wMSIgcj0iMi42MyIvPjxsaW5lIGNsYXNzPSJjbHMtOSIgeDE9IjcxLjY0IiB4Mj0iODIuMzYiIHkxPSI2MC4wNyIgeTI9IjU3LjYzIi8+PGxpbmUgY2xhc3M9ImNscy0xMCIgeDE9IjcxLjY0IiB4Mj0iODIuMzYiIHkxPSI1OS4wNyIgeTI9IjU2LjYzIi8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNOTMsOTYuNVY2N2wtNSwxLjM2TDg1LjI1LDgwLjY1YTE1LjgsMTUuOCwwLDAsMS03LjM5LDEwLjE2bC0yLjE0LjkzYTI5LjI2LDI5LjI2LDAsMCwxLTIzLjQ0LDBsLTIuMTQtLjkzYTE1LjgsMTUuOCwwLDAsMS03LjM5LTEwLjE2TDQwLDY4LjM2LDM1LDY3Vjk2LjVsLTE2LjQ2LDYuNjQsMS4zNywxLjU1YTYwLjIxLDYwLjIxLDAsMCwwLDE3LjI0LDEzbDE5LjM1LTEzQTE0LDE0LDAsMCwxLDY0LDEwMi41YTE2LjM3LDE2LjM3LDAsMCwxLDcuNSwxLjgxbDE5LjM3LDEzLjM0YTYwLjM5LDYwLjM5LDAsMCwwLDE3LTEyLjcyYy41Ni0uNjEsMS4xLTEuMjEsMS42MS0xLjc5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMTIiIGQ9Ik02MCw5MGE3LDcsMCwwLDEsOCwwIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNjQsNjMuMTJ2OC4yMWEuNTEuNTEsMCwwLDEtLjYzLjQ5bC0zLjYyLTFhLjUxLjUxLDAsMCwxLS4zMS0uNzFsMy42MS03LjIzQS41LjUsMCwwLDEsNjQsNjMuMTJaIi8+PC9zdmc+'
            alt='profile_img'
          />
          <span className='header'>
            Linchen
            <div className='meta' style={{ marginTop: "5px" }}>
              <span className='time'>{blog.date}</span>
              <span className='right floated category'>
                <i className='clock outline icon' style={{ marginRight: "5px" }} />
                10 mins
              </span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
