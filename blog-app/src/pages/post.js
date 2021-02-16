import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";
import hljs from "highlight.js";
import SyncLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/core";
import {DiscussionEmbed} from "disqus-react";


import "./post.css";
import posts from "../posts.json";
// import CommentBox from '../components/Comment';
// import app from '../utils/firebaseConfig.js';

const override = css`
  display: block;
  margin: 200px 0 0 0;
`;


const Post = (props) => {
  const [post, setPost] = useState(null);
  const location = useLocation();
  // const [postExists, setPostExists] = useState(false);
  const disqusShortname = "garyblog-227";
  const [disqusConfig, setConfig] = useState({
    url: `http://localhost:3000/${location.pathname}`,
    identifier: `${location.pathname}/comments`,
    title: 'comments'
  })



  console.log(post);

  useEffect(() => {
    const validId = parseInt(props.match.params.id);
    
    if(posts.blogs[`${validId}`]!== undefined){
      setPost(posts.blogs[`${validId}`]);

      
    };
    
    // app.database().ref('blogs')
    //   .get() 
    //   .then(res => setPosts(res.val()['blogs']))

  }, [])

  useEffect(() => {
    if(posts !== null){
      document.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });

      document.querySelectorAll("table").forEach(table => {
        table.className += " ui celled striped table"
      })

    }
  }, [posts])


  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }


  return (
    <>
    { post === null ?
      <SyncLoader color={'#9afcf1'} loading={true} css={override} size={40} />
    :(<div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.title}</title>
      </Helmet>
      <div className="blog-container">
        <div className="blog-body">
          <div className="post-body">
            <div className="post-head">
              <h2>{post.title}</h2>
              <p>
                {post.date} by <span>Linchen Chen</span>
              </p>
            </div>
            <Markdown className="post-markdown" children={post.content} escapeHtml={false} />
          </div>
        </div>

      </div>
      { disqusConfig.identifier !== null &&
        
          
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/>
        /* <CommentBox  blogId={validId} db={post.AllComments} rootCommentsIds={post.rootCommentIDs} /> */
        
      }
    </div>)
    }
    </>
  );
};

export default Post;
