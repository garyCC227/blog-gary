import React, { useContext, useEffect } from "react";

import styles from "./LabelList.module.css";
import data from "../../cardNote.json";
import {FilterContext} from "../../utils/store";

const LabelList = ({ tagsMeta }) => {
  const {
    tags: [selectedTags, setSelectedTags],
    blogCount: [blogCount, setBlogCount],
    filteredBlogs:[_, setFilteredBlogs]
  } = React.useContext(FilterContext);

  const blogs = data['blogs']
  
  const click = (evt, tag) => {
    const isChecked = evt.target.checked;
    if (isChecked) {
      selectedTags.add(tag)
      const newTags = new Set(selectedTags);
      setSelectedTags(newTags)
    }else{
      selectedTags.delete(tag)
      const newTags = new Set(selectedTags);
      setSelectedTags(newTags)
    }
  };

  //filter blogs here
  useEffect(()=>{
    const filteredIds = new Set();
    for (const tag of selectedTags){
      for(const blog of blogs){
        if (blog.tag.includes(tag))
          filteredIds.add(blog.id)
      }
    }

    const newFilteredBlog = []
    for (const id of filteredIds){
      const index = blogs.findIndex(blog => blog.id === id)
      newFilteredBlog.push(blogs[index])
    }

    //sort blog by date
    newFilteredBlog.sort(sortByDateString);

    setBlogCount(newFilteredBlog.length);
    setFilteredBlogs(newFilteredBlog);

  }, [selectedTags])

  const tagsUI = () => {
    const UI = [];

    for (const [tag, value] of Object.entries(tagsMeta)) {
      let isChecked = false;
      if (selectedTags.has(tag)) isChecked = true;

      const tagUI = (
        <div
          key={value.id}
          className={`${value.className} ${styles["my-label"]}`}
        >
          <div class='ui checkbox'>
            <input type='checkbox' name='example' onClick={(evt)=>click(evt, tag)} checked={isChecked}/>
            <label style={{ color: "white" }}>{tag}</label>
          </div>
        </div>
      );

      UI.push(tagUI);
    }

    return UI;
  };
  return (
    <>
      <div className={styles.labels}>
        {/* <h4 className="ui header">Tags:</h4> */}

        <div>{tagsUI()}</div>

        {/* <a class={`ui teal label `}>Orange</a>
      <a class={`ui blue label `}>Yellow</a> */}
      </div>
      <p className={styles["left-indent"]}> {`About ${blogCount} results`}</p>
    </>
  );
};

export default LabelList;


const sortByDateString = (date1, date2) => {
  const time1 = new Date(date1);
  const time2 = new Date(date2);

  return date1 > date2;
}
