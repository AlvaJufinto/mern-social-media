import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import SignIn from "./pages/SignIn";

import './styles/globals.css';

const App = () => {

  return (
    // <Router>
    //   <Routes>
    //   </Routes>
    // </Router>
    <SignIn />
  );
}

export default App;
