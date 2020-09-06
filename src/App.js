import React from 'react';
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import PostDetails from './Components/PostDetails/PostDetails';
import Header from './Components/Header/Header';


function App() {
  return (
    <Router>
      <Header></Header>
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
  );
}

export default App;
