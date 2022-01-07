import { GlobalStyles } from "./globals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import PostPage from "./pages/PostPage";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/explore" element={<Explore />}/>
        <Route exact path="/post/:id" element={<PostPage />}/>
        <Route exact path="/profile/:id" element={<Profile />}/>
        <Route exact path="/sign-in" element={<SignIn />}/>
        <Route exact path="/sign-up" element={<SignUp />}/>
      </Routes>
    </Router>
  );
}

export default App;
