import React from 'react';
import Comment from './Comment.jsx';
import styles from './Comment.module.css';

function CommentList(props) {
  let comments = props.data.map((item, index) => {
    item.index = index;
    return (
      <Comment 
        key={index}
        {...item}
        editToggle={props.editToggle[index]}
        handleEditToggle={() => props.handleEditToggle(index)}
        handleCommentDelete={() => props.handleCommentDelete(index)}
        handleCommentUpdate={props.handleCommentUpdate}
      />
    );
  });
  return (
    <div>{comments}</div>
  );
}

export default CommentList;