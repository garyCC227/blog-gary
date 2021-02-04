import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import avatar from "../../assist/img/replyAvatar.svg";
import styles from "./Comment.module.css";
import { getDateFormat } from "../../utils/util";
import app from "../../utils/firebaseConfig.js";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.author; //TODO:DELETE
    this.state = {
      replyValid: true,
      replyToggle: false,
      replyData: {
        author: null,
        date: null,
        content: null
      }
    };

    this.handleReplyToggle = this.handleReplyToggle.bind(this);
    this.handleReplyChange = this.handleReplyChange.bind(this);
  }

  handleReplyChange(e) {
    e.preventDefault();

    this.setState({
      replyData: {
        ...this.state.replyData,
        content: e.target.value
      }
    });
  }

  handleSubmitUpdate(e) {
    e.preventDefault();
    if (
      this.state.replyData.author === "" ||
      this.state.replyData.content === "" ||
      this.state.replyData.author === null ||
      this.state.replyData.content === null
    ) {
      this.setState({
        replyValid: false
      });
      return;
    }
    this.setState(
      {
        replyData: {
          ...this.state.replyData,
          date: getDateFormat()
        }
      },

      () => {
        //update firebase here
        // console.log("hello");

        let blogId = this.props.blogId;
        let ref = app.database().ref(`blogs/blogs/blog${blogId}`);
        app
          .database()
          .ref("blogs/LastID")
          .get()
          .then(res => res.val())
          .then(lastId => {
            let newID = lastId + 1;
            ref.child(`AllComments/ID${newID}`).set({
              ...this.state.replyData,
              child: []
            });

            ref
              .child(`AllComments/${this.props.commentID}/child`)
              .get()
              .then(res => res.val())
              .then(child => {
                if (child === null) {
                  ref
                    .child(`AllComments/${this.props.commentID}/child`)
                    .set([newID]);
                } else {
                  child.push(newID);
                  ref
                    .child(`AllComments/${this.props.commentID}/child`)
                    .set(child);
                }
              });

            //update last id
            app
              .database()
              .ref("blogs/LastID")
              .set(newID);
          })
          .then(() => {
            alert(
              "Thank You! Your request has been received and our team will connect with you shortly."
            );
            window.location.reload();
          });
      }
    );
  }

  handleReplyToggle() {
    this.setState({
      replyToggle: this.state.replyToggle ? false : true
    });
  }

  ChildComments(childs) {
    return (
      <div class="comments">
        {childs.map(id => {
          return (
            <Comment
              key={`ID${id}`}
              blogId={this.props.blogId}
              commentID={`ID${id}`}
              db={this.props.db}
              {...this.props.db[`ID${id}`]}
            />
          );
        })}
      </div>
    );
  }

  render() {
    let { content, author, date } = { ...this.props },
      editButton = this.state.replyToggle ? "Cancel" : "Reply",
      contentDiv = this.state.replyToggle && (
        <form
          className={styles.editContent}
          onSubmit={e => this.handleSubmitUpdate(e)}
        >
          <TextField
            placeholder="Author"
            onChange={e => {
              this.setState({
                replyData: {
                  ...this.state.replyData,
                  author: e.target.value
                }
              });
            }}
            error={this.state.replyData.author === null}
            id="standard-error-helper-text"
          />
          <br />
          <TextField
            multiline
            placeholder="Enter your reply..."
            rows={2}
            defaultValue={this.state.replyData.content}
            onChange={this.handleReplyChange}
            error={this.state.replyData.content === null}
            id="standard-error-helper-text"
            className={styles.textarea}
          />
          <button>Done</button>
          {/*  <button onClick={ window.location.reload()}>new</button> */}
          {!this.state.replyValid && (
            <div class="ui negative message">
              <i
                class="close icon"
                onClick={() => this.setState({ replyValid: true })}
              ></i>
              <div class="header">Cannot be empty..</div>
            </div>
          )}
        </form>
      );

    return (
      <>
        <div className="comment">
          <img className={`avatar ${styles.avatar}`} src={avatar} />
          <div class="content">
            <a class="author">{author}</a>
            <div class="metadata">
              <span class="date">{date}</span>
            </div>
            <div class="text">{content}</div>
            <div class="actions">
              <a class="reply" onClick={this.handleReplyToggle}>
                {editButton}
              </a>
            </div>

            {contentDiv}
          </div>

          {this.props.child && this.ChildComments(this.props.child)}
        </div>
      </>
    );
  }
}

export default Comment;
