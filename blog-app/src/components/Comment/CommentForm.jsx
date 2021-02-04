import React, { Component } from "react";

import styles from "./Comment.module.css";
import { getDateFormat } from "../../utils/util";
import app from "../../utils/firebaseConfig.js";

class CommentForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    let content = this.refs.content.value,
      author = this.refs.author.value,
      date = getDateFormat(),
      warning = this.refs.warning;

    if (!author) {
      warning.innerHTML = "* Author cannot be empty";
      return null;
    } else if (!content) {
      warning.innerHTML = "* Comments cannot be empty";
      return null;
    } else {
      warning.innerHTML = "";
    }

    this.props.handleCommentSubmit({ content, author, date });

    //update firebase
    let blogId = this.props.blogId;
    let ref = app.database().ref(`blogs/blogs/blog${blogId}`);
    app
      .database()
      .ref("blogs/LastID")
      .get()
      .then(res => res.val())
      .then(lastId => {
        ref.child(`AllComments/ID${lastId + 1}`).set({
          author,
          date,
          content,
          child: []
        });

        //update parent ids
        ref
          .child(`rootCommentIds`)
          .get()
          .then(res => res.val())
          .then(rootIds => {
            if (rootIds === null) {
              ref.child(`rootCommentIds`).set([lastId + 1]);
            } else {
              rootIds.push(lastId + 1);
              ref.child(`rootCommentIds`).set(rootIds);
            }
          });

        //update last id
        app
          .database()
          .ref("blogs/LastID")
          .set(lastId + 1);
      })

      .then(() => {
        alert(
          "Thank You! Your request has been received and our team will connect with you shortly."
        );
        window.location.reload();
      });

    // ref.child("ID4")
    // .set({
    //     "author":"tester2",
    //     "date":new Date().toISOString(),
    //     "content":"Comment2      dasdsadasdasdsas",
    //     "child":[3]
    // })
    //window.location.reload();
  }

  render() {
    return (
      <form className={styles.submitform} onSubmit={e => this.handleSubmit(e)}>
        <span className={styles.warning} ref="warning"></span>
        <div className={styles["form-row"]}>
          <input type="text" placeholder="Author" ref="author" />
        </div>
        <div className={styles["form-row"]}>
          <textarea
            placeholder="Leave your comment here..."
            ref="content"
          ></textarea>
        </div>
        <div className={styles["form-row"]}>
          <button>Publish</button>
        </div>
      </form>
    );
  }
}

export default CommentForm;
