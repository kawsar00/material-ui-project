import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
 const {name, email, body}= props.comment
 const classes = useStyles();

 
//to get comment image
const [userImage, setUserImage] = useState([])
 useEffect(() => {
   fetch(`https://randomuser.me/api/`)
   .then(res => res.json())
   .then(data => {
    // console.log(data.results[0].picture.large)
    setUserImage(data.results[0].picture.large)
   })
 }, [])

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img style={{borderRadius: '50%'}} alt="userImage" src={userImage} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              {/* <Typography gutterBottom variant="subtitle1">
              <h4>Name: {name}</h4>
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography> */}
              <h4>Name: {name}</h4>
            <h6>Email: {email}</h6>
            </Grid>
            <Grid item>
              <Typography variant="body2" style={{  }}>
               <b>Comment:</b>  {body}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  </div>
  );
};

export default Comments;