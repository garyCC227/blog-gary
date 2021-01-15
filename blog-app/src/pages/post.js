import React from "react";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";

import "./post.css";
import post from "../cardNote.json";

const Post = (props) => {
  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }

  const fetchPost = {};
  let postExists = false;
  post['blogs'].forEach((post, i) => {
    if (validId === post.id) {
      fetchPost.title = post.title ? post.title : "No title given";
      fetchPost.date = post.date ? post.date : "No date given";
      fetchPost.author = post.author ? post.author : "No author given";
      fetchPost.content = post.content ? post.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Redirect to="/404" />;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{fetchPost.title}</title>
      </Helmet>
      <div className="blog-container">
        <div className="blog-body">
          <div className="post-body">
            <div className="post-head">
              <h2>{fetchPost.title}</h2>
              <p>
                {fetchPost.date} by <span>Linchen Chen</span>
              </p>
            </div>

            <Markdown source={fetchPost.content} escapeHtml={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
