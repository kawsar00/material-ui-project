import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails = () => {
  const { postId } = useParams()

  //to get post details
  const [postDetails, setPostDetails] = useState([])
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(url)
      .then(res => res.json())
      .then(post => setPostDetails(post))
  }, [])

  //to get comments of each posts
  const [comments, setComments] = useState([])
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    fetch(url)
      .then(res => res.json())
      .then(comment => setComments(comment))
  }, [])

  //postDetails style
  const postDetailStyle = {
    background: 'rgb(242 242 242)',
    boxShadow: '4px 5px 15px grey',
    padding: '20px',
    width: '80%',
    margin: 'auto',
    borderRadius: '20px',
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Post Details</h1>
      <div style={postDetailStyle}>
        <h3>{postDetails.title}</h3>
        <p>{postDetails.body}</p>
      </div>
      <div>
        <h2>Comments:({comments.length})</h2>
        {
          comments.map(comment => <Comments comment={comment}></Comments>)
        }
      </div>
    </div>
  );
};

export default PostDetails;