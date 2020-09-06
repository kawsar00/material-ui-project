import React from 'react';
import './Post.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Post = (props) => {
  const classes = useStyles();
  const { title, id, body } = props.post
  const [expanded] = React.useState(false);

  //code for get useHistory by button
  const history = useHistory();
  const handleClick = (userId) => {
    history.push(`/posts/${userId}`);
  }
  return (
    <div className="post-box">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="" component="p">
            <h2>{title}</h2>
            <p>{body}</p>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
          >
            <Button onClick={() => {handleClick(id)}} variant="contained" color="primary">
              READ MORE &#x0003E;&#x0003E;
      </Button>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;