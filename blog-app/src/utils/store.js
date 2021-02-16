import React from 'react'

import data from '../posts.json';

export const FilterContext = React.createContext(null)

export default ({ children }) => {
  const [selectedTags, setSelectedTags] = React.useState(new Set(Object.keys(data.tags)));
  const [blogCount, setBlogCount] = React.useState(data.blogs.length);
  const blogs = Object.values(data.blogs);
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs);
  
  const store = {
    tags: [selectedTags, setSelectedTags],
    blogCount: [blogCount, setBlogCount],
    filteredBlogs:[filteredBlogs, setFilteredBlogs]
  }

  return <FilterContext.Provider value={store}>{children}</FilterContext.Provider>
}
