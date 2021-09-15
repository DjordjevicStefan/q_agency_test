import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";
import { PostProvider } from "./context/post/PostProvider";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <PostProvider>
        <Navbar />
        <Switch>
          <Route path='/posts' component={Posts} />
          <Route path='/' component={Home} />
        </Switch>
      </PostProvider>
    </div>
  );
}

export default App;
