import React, { Component } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Venue from './Venue';
import Schedule from './Schedule';
import Faq from './Faq';
import Error from './Error';
import Footer from './Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <center>

       <Navigation />
  
          <Router>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/theLOCALE" component={Venue} />
                <Route path="/theLINEUP" component={Schedule} />
                <Route path="/QandA" component={Faq} />
                <Route component={Error} />
              </Switch>
          </Router>

        <Footer />

      </center>
      <br />
      <br />
      
      </div>
    );
  }
}

export default App;


