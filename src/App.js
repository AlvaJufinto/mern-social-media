import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import './styles/globals.css';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} ></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
