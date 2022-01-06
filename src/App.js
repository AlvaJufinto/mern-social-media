import { GlobalStyles } from "./globals";
import { BrowserRouter as Router } from "react-router-dom";

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
      {/* <SignUp />   */}
      {/* <SignIn /> */}
      {/* <Home /> */}
      {/* <Explore /> */}
      {/* <Profile /> */}
      <PostPage />
    </Router>
  );
}

export default App;
