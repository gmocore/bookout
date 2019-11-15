import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home'
import Search from './pages/Search'
import Saved from './pages/Saved'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/saved'} component={Saved}/>
      <Route exact path={'/search'} component={Search}/>
      
    </div>

    </Router>
  );
}

export default App;
