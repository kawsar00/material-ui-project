import React from 'react';
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <PostContainer></PostContainer>
        </Route>
        <Route exact path="/">
        <PostContainer></PostContainer>
        </Route>
        <Route path="/posts/:postId">
            <PostDetails></PostDetails>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    // <div>
    //   
    // </div>
  );
}

export default App;
