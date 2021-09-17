import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { PostProvider } from "./context/post/PostProvider";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <PostProvider>
      <Router>
        <App />
      </Router>
    </PostProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
