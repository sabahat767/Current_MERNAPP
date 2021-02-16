import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Add from "./components/user/Add";
import Users from "./components/user/Users";
import Header from "./components/Header";
import SingleUser from "./components/user/SingleUser";
import Home from "./components/Home";
import AddPost from "./components/post/AddPost";
import Posts from "./components/post/Posts";
import SinglePost from "./components/post/SinglePost";
import SingleUserUpdate from "./components/user/SingleUserUpdate";
function App() {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/register">
            <Add />
          </Route>
          <Route path="/addpost">
            <AddPost />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/single-user/:id">
            <SingleUser />
          </Route>
          <Route path="/single-user-update/:id">
            <SingleUserUpdate/>
          </Route>
          <Route path="/single-post/:id">
            <SinglePost />
            </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
