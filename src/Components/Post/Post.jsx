import React from 'react';
import './Post.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
})); //style for button



const Post = (props) => {
  const classes = useStyles();
  const {title, id} = props.post

  //code for get useHistory by button
const history = useHistory();
const handleClick = (userId) => {
  history.push(`/posts/${userId}`);
}

  return (
    <div className="post-box">
      <h2>Title: {title}</h2>
      <Button onClick = {() => {handleClick(id)}} variant="contained" color="primary">
        READ MORE &#x0003E;&#x0003E;
      </Button>
    </div>
  );
};

export default Post;