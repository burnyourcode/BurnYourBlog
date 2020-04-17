import React from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import "sakura.css";

import BlogList from "./components/BlogList";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">BlogList</Link>
        {"  "}
        <Link to="/add">Add</Link>
      </nav>
      <Router>
        <BlogList path="/" />
        <AddPost path="/add" />
        <EditPost path="/:postID" />
      </Router>
    </div>
  );
}

export default App;
