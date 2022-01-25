import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { GlobalStyles } from "./globals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import PostPage from "./pages/PostPage";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/sign-in" /> }/>
        <Route path="/explore" element={user ? <Explore /> : <Navigate to="/sign-in" /> }/>
        <Route path="/post/:postId" element={user ? <PostPage /> : <Navigate to="/sign-in" /> }/>
        <Route path="/profile/:username" element={user ? <Profile /> : <Navigate to="/sign-in" /> }/>
        {/* <Route exact path="/" element={<Home />}/>
        <Route exact path="/explore" element={<Explore /> }/>
        <Route exact path="/post/:id" element={<PostPage />}/>
        <Route exact path="/profile/:id" element={<Profile /> }/> */}
        <Route path="/sign-in" element={user ? <Navigate to="/" /> :  <SignIn />}/>
        <Route exact path="/sign-up" element={user ? <Navigate to="/" /> : <SignUp />}/>
      </Routes>
    </Router>
  );
}

export default App;
