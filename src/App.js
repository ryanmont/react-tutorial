import React, { Component } from 'react';

import Land from './Land'
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
                <Route path="/" component={Land} exact />
                <Route path="/theLOCALE" component={Venue} />
                <Route path="/theLINEUP" component={DayOne} />
                <Route path="/QandA" component={Faq} />
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


