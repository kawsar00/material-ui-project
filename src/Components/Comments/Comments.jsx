import React, { useState, useEffect } from 'react';
import './Comments.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 1200,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',

  },
}));

const Comments = (props) => {
  const classes = useStyles();
  const { name, email, body } = props.comment

  //to get comment image
  const [userImage, setUserImage] = useState([])
  useEffect(() => {
    fetch(`https://randomuser.me/api/`)
      .then(res => res.json())
      .then(data => setUserImage(data.results[0].picture.medium))
  }, [])
  
  return (
    <div id="commentStyle" className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img style={{ borderRadius: '50%' }} alt="userImage" src={userImage} />
            </ButtonBase>
          </Grid>
          <Grid item xs={10} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <h4>Name: {name}</h4>
                <h5>Email: {email}</h5>
                <p>{body}</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Comments;