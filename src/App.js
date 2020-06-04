import React from 'react';
import './App.css';
import Login from './Components/Login'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Logout from './Components/Logout';
import Nav from './Components/Nav';
import About from './About/About'
import Blg from './Blg/Blg'
import Contact from './Contact/Contact'

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Login} />
          <Home path="/Home" component={Home} />
          <About path="/about" component={About} />
          <Blg path="/blogs" component={Blg} />
          <Contact path="/Contact" component={Contact} />
          <Logout path='/Logout' component={Logout} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
