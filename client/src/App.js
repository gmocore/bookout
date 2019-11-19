import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home'
import Search from './pages/Search'
import Saved from './pages/Saved'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/saved'} component={Saved}/>
      <Route exact path={'/search'} component={Search}/>
      <Route component={NotFound}/>
      </Switch>
    </div>

    </Router>
  );
}

export default App;
