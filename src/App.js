import React, { Component } from 'react';
import Home from './Home';
import Home2 from './Home2'
import Venue from './Venue';
import Faq from './Faq';
import Error from './Error';
import Footer from './Footer';
import DayOne from './DayOne'
import DayTwo from './DayTwo'
import JNO from './JNO'
import Round from './Round'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <center>

       
  
          <Router>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/theLOCALE" component={Venue} />
                <Route path="/theLINEUP" component={DayOne} />
                <Route path="/QandA" component={Faq} />
                <Route path="/whatsUP2" component={Home2} />
                <Route path="/DayOne" component={DayOne} />
                <Route path="/DayTwo" component={DayTwo} />
                <Route path="/JNO" component={JNO} />
                <Route path="/Round" component={Round} />
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


