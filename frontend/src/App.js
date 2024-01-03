import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/page/home'
import Signin from './components/auth/signin';
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/signin" Component={Signin} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;