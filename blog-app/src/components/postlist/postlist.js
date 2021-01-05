import React from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

import blogpost from "../../blogPost.json";
import "./postlist.css";

const Postlist = () => {
  const excerptList = blogpost.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ");
  });
  return (
    <div className="wrapper">
      <div className="post-list">
        <h1 className="post-list-subhead">Recent Posts</h1>
        {blogpost.length &&
          blogpost.map((post, i) => {
            return (
              <section className="post-item" key={post.id}>
                <header className="post-item-header">
                  <p className="post-item-meta">
                    <span className="post-item-date">{post.date}</span> on{" "}
                    <span className="post-item-category category-js">
                      {post.tag}
                    </span>
                  </p>
                  <h2 className="post-item-title">
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                  </h2>
                </header>

                <div className="post-item-description">
                  <Markdown source={excerptList[i]} escapeHtml={false} />
                </div>

                <footer className="post-item-footer">
                  <Link className="post-item-more" to={`/post/${post.id}`}>
                    <span>Read More</span>
                  </Link>
                </footer>
              </section>
            );
          })}
      </div>
    </div>
  );
};

export default Postlist;
