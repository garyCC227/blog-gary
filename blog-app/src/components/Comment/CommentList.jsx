import React from 'react';
import Comment from './Comment.jsx';
import styles from './Comment.module.css';

function CommentList(props) {
  let comments = props.data.map((item, index) => {
    item.index = index;
    // console.log(`COMMENT id is :${`ID${props.ids[index]}`}`);
    
    return (
      <Comment 
        key={index}
        commentID={`ID${props.ids[index]}`}
        blogId={props.blogId}
        db={props.db}
        {...item}
        // editToggle={props.editToggle[index]}
        // handleEditToggle={() => props.handleEditToggle(index)}
        // handleCommentDelete={() => props.handleCommentDelete(index)}
        // handleCommentUpdate={props.handleCommentUpdate}
      />
    );
  });
  return (
    <div className="ui comments">{comments}</div>
  );
}

export default CommentList;