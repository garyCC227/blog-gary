import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import styles from './Comment.module.css';
class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      editToggle: Array(this.props.data.length).fill(false),
    };
  }
  
  handleCommentSubmit(comment) {
    this.setState({
      data: this.state.data.concat([comment]),
    });
  }

  handleCommentDelete(index) {
    const data = this.state.data.slice(0),
          editToggle = this.state.editToggle.slice(0);
    data.splice(index, 1);
    editToggle.splice(index, 1);
    this.setState({
      data: data,
      editToggle: editToggle,
    }); 
  }

  handleEditToggle(index) {
        const editToggle = this.state.editToggle.slice(0);
        editToggle[index] = !editToggle[index];
        this.setState({
          editToggle: editToggle,
        });
      }

  handleCommentUpdate(index, comment) {
    const data = this.state.data.slice(0),
          editToggle = this.state.editToggle.slice(0);
    data[index] = comment;
    editToggle[index] = !editToggle[index];
    this.setState({
      data: data,
      editToggle: editToggle,
    }); 
  }

  

  render() {
    return (
      <div className={styles['comment-box']}>
        <h1 className={styles.CommentTitle}>评论</h1>
        <CommentList 
          {...this.state}
          handleEditToggle={(index) => this.handleEditToggle(index)}
          handleCommentDelete={(index) => this.handleCommentDelete(index)}
          handleCommentUpdate={(index, comment) => this.handleCommentUpdate(index, comment)}
        />
        <CommentForm handleCommentSubmit={(comment) => this.handleCommentSubmit(comment)}/>
      </div>
    );
  }
}

export default CommentBox;