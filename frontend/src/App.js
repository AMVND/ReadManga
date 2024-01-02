import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/page/home'
import Signin from './components/auth/signin';
import Signup from './components/auth/signup'
import Navbar from './components/common/Navba';
function App() {
  return (
    <div className="app">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/signin" Component={Signin} />
          <Route path="/singup" Component={Signup} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;