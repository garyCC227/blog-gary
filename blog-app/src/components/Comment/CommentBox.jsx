import React, { Component } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import styles from "./Comment.module.css";
class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      editToggle: Array([]).fill(false)
    };
  }

  componentDidMount() {
    let commentIds = [];
    this.findRootComments(commentIds);
    this.setState({
      data: commentIds
    });
    //show UI
  }

  findRootComments(commentsIds) {
    if (this.props.rootCommentsIds === null) {
      return;
    }
    for (const id of this.props.rootCommentsIds) {
      commentsIds.push(this.props.db[`ID${id}`]);
    }
  }

  handleCommentSubmit(comment) {
    console.log(comment);

    this.setState({
      data: this.state.data.concat([comment])
    });
  }

  handleCommentDelete(index) {
    const data = this.state.data.slice(0),
      editToggle = this.state.editToggle.slice(0);
    data.splice(index, 1);
    editToggle.splice(index, 1);
    this.setState({
      data: data,
      editToggle: editToggle
    });
  }

  handleEditToggle(index) {
    const editToggle = this.state.editToggle.slice(0);
    editToggle[index] = !editToggle[index];
    this.setState({
      editToggle: editToggle
    });
  }

  handleCommentUpdate(index, comment) {
    const data = this.state.data.slice(0),
      editToggle = this.state.editToggle.slice(0);
    data[index] = comment;
    editToggle[index] = !editToggle[index];
    this.setState({
      data: data,
      editToggle: editToggle
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className={styles["comment-box"]}>
        <h1 className={styles.CommentTitle}>View Comments</h1>
        {this.props.rootCommentsIds &&
          this.props.rootCommentsIds.length >= 1 && (
            <CommentList
              {...this.state}
              handleEditToggle={index => this.handleEditToggle(index)}
              db={this.props.db}
              blogId={this.props.blogId}
              ids={this.props.rootCommentsIds}
              handleCommentDelete={index => this.handleCommentDelete(index)}
              handleCommentUpdate={(index, comment) =>
                this.handleCommentUpdate(index, comment)
              }
            />
          )}
        <CommentForm
          blogId={this.props.blogId}
          handleCommentSubmit={comment => this.handleCommentSubmit(comment)}
        />
      </div>
    );
  }
}

export default CommentBox;
