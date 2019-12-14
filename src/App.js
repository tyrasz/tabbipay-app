import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import About from './pages/About';
import Terms from './pages/Terms';
import Account from './pages/Account';
import Transfer from './pages/Transfer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './Home';
import Success from './pages/Success';



function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/terms" component={Terms} />
          <Route path="/account" component={Account} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/success" component={Success} />
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
