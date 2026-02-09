import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/home";
import CreatePost from "./pages/createpost";
import Post from "./pages/post";

function App() {
  return <div className="App">
    <Router>
      <Link to="/">Home Page</Link>
      <Link to="/createpost">Create A Post</Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
        <Route path="/post/:id" element={<Post/>}/>
      </Routes>
    </Router>
  </div>;
}

export default App;
