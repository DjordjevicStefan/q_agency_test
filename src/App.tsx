import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Post from "./components/Post/Post";
import "./App.css";

const App = () => {
  const message = "Hello from ";
  console.log(message + "App");

  return (
    <div className='App'>
      <Layout message={message}>
        <Navbar message={message} />
        <Switch>
          <Route path='/posts/:postId'>
            <Post message={message} />
          </Route>
          <Route path='/posts'>
            <Posts message={message} />
          </Route>
          <Route path='/'>
            <Home message={message} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
