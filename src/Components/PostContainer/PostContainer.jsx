import React, { useState, useEffect } from 'react'; import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Post from '../Post/Post';


const PostContainer = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(article => setPosts(article))
  }, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md"  style={{textAlign:'center'}}>
        <h1>Total Post: {posts.length}</h1>
        {
          posts.map(post => <Post post = {post}></Post>)
        }
      </Container>
    </React.Fragment>
  );
};

export default PostContainer;