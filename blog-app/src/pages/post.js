import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";
import hljs from "highlight.js";

import "./post.css";
import post from "../cardNote.json";
import CommentBox from '../components/Comment';
import app from '../utils/firebaseConfig.js';



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
    console.log("here");
    console.log("checkhere",fetchPost);
    console.log("checkhere2",posts);
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });

    document.querySelectorAll("table").forEach(table => {
      table.className += " ui celled striped table"
    })
  }, [posts !== null])


  const validId = parseInt(props.match.params.id);
  if (!validId) {
    return <Redirect to="/404" />;
  }

  const fetchPost = {};
  //console.log("postjson",post['blogs']);
  console.log('posts', posts);
  console.log('comments', comments);
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
  posts !== null && posts.forEach((eachPost, i) => {
    console.log("did1");
    console.log("did1Posts", posts);
    if (eachPost !== null && validId === eachPost.id) {
      console.log("did2");
      fetchPost.title = eachPost.title ? eachPost.title : "No title given";
      console.log(fetchPost.title);
      fetchPost.date = eachPost.date ? eachPost.date : "No date given";
      fetchPost.author = eachPost.author ? eachPost.author : "No author given";
      fetchPost.content = eachPost.content ? eachPost.content : "No content given";
      postExists = true;
    }
  }
  );
 


  if (posts !== null && postExists === false) {
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
            <Markdown className="post-markdown" children={fetchPost.content} escapeHtml={false} />
          </div>
        </div>

      </div>
      {comments !== null &&
        <CommentBox data={[comments['ID3'], comments['ID3']]} />

      }
    </div>
  );
};

export default Post;
