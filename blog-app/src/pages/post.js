import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";
import hljs from "highlight.js";
import SyncLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/core";

import "./post.css";
import post from "../cardNote.json";
import CommentBox from '../components/Comment';
import app from '../utils/firebaseConfig.js';

const override = css`
  display: block;
  margin: 200px 0 0 0;
`;


const Post = (props) => {
  const [comments, setComments] = useState(null);
  const [posts, setPosts] = useState(null);
  // if (comments !== null){
  //   console.log(comments["ID4"]);
  // }







  useEffect(() => {

    app.database().ref('blogs')
      .get()
      //.then(res=>console.log("something",res.val()))  
      .then(res => setPosts(res.val()['blogs']))




    app.database().ref('comments')
      .get()
      .then(res => setComments(res.val()['Comments']))



    // let ref= app.database().ref('comments/Comments')
    // ref.child("ID4")  
    // .set({
    //     "author":"tester2",
    //     "date":new Date().toISOString(),
    //     "content":"Comment2      dasdsadasdasdsas",
    //     "child":[3]
    // })
  }, [])

  useEffect(() => {
    if(posts !== null){
      document.querySelectorAll("pre code").forEach(block => {
        hljs.highlightBlock(block);
      });

      document.querySelectorAll("table").forEach(table => {
        table.className += " ui celled striped table"
      })

      console.log(posts);
      
    }
  }, [posts])


  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }

  const fetchPost = {};
  //console.log("postjson",post['blogs']);
  //console.log('posts', posts);
  //console.log('comments', comments);
  let postExists = false;

/* 
     post['blogs'].forEach((post, i) => {
  
      //posts !== null && posts.forEach((post, i) => {
      if (validId === post.id) {
        fetchPost.title = post.title ? post.title : "No title given";
        fetchPost.date = post.date ? post.date : "No date given";
        fetchPost.author = post.author ? post.author : "No author given";
        fetchPost.content = post.content ? post.content : "No content given";
        postExists = true;
      }
    }
    );   */ 

   //post['blogs'].forEach((post, i) => {
  if(posts !== null && posts[`blog${validId}`]!== undefined){
    let eachPost = posts[`blog${validId}`]
    fetchPost.title = eachPost.title ? eachPost.title : "No title given";
    //console.log(fetchPost.title);
    fetchPost.date = eachPost.date ? eachPost.date : "No date given";
    fetchPost.author = eachPost.author ? eachPost.author : "No author given";
    fetchPost.content = eachPost.content ? eachPost.content : "No content given";
    fetchPost.rootCommentIDs=eachPost.rootCommentIds ? eachPost.rootCommentIds: null;
    fetchPost.AllComments=eachPost.AllComments ? eachPost.AllComments: null;
    postExists = true;
  
  };


  if (posts !== null && postExists === false) {
    return <Redirect to="/404" />;
  }
  return (
    <>
    { posts === null?
      <SyncLoader color={'#9afcf1'} loading={true} css={override} size={40} />
    :(<div>
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
            <Markdown className="post-markdown" children={fetchPost.content} escapeHtml={false} />
          </div>
        </div>

      </div>
      {posts !== null && postExists && comments !== null &&
        
        <CommentBox  blogId={validId} db={fetchPost.AllComments} rootCommentsIds={fetchPost.rootCommentIDs} />
        
        
      }
    </div>)
    }
    </>
  );
};

export default Post;
