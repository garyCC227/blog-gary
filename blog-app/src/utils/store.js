import React from 'react'

import data from '../cardNote.json';

export const FilterContext = React.createContext(null)

export default ({ children }) => {
  const [selectedTags, setSelectedTags] = React.useState(new Set(Object.keys(data.tags)));
  const [blogCount, setBlogCount] = React.useState(data.blogs.length);
  const [filteredBlogs, setFilteredBlogs] = React.useState(data.blogs);

  const store = {
    tags: [selectedTags, setSelectedTags],
    blogCount: [blogCount, setBlogCount],
    filteredBlogs:[filteredBlogs, setFilteredBlogs]
  }

  return <FilterContext.Provider value={store}>{children}</FilterContext.Provider>
}