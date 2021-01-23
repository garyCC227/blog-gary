import React from 'react'

import data from '../cardNote.json';

export const FilterContext = React.createContext(null)

export default ({ children }) => {
  const [selectedTags, setSelectedTags] = React.useState(new Set(Object.keys(data.tags)));
  const [blogCount, setBlogCount] = React.useState(data.blogs.length);
  const blogs = data.blogs;
  blogs.sort(sortByDateString)
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs);

  
  const store = {
    tags: [selectedTags, setSelectedTags],
    blogCount: [blogCount, setBlogCount],
    filteredBlogs:[filteredBlogs, setFilteredBlogs]
  }

  return <FilterContext.Provider value={store}>{children}</FilterContext.Provider>
}

const sortByDateString = (blog1, blog2) => {
  const time1 = new Date(blog1.date);
  const time2 = new Date(blog2.date);
  
  return time1 - time2;
}
