import React, { Component } from 'react';
import DayNav from './DayNav';
import Navigation from './Navigation';


class DayTwo extends Component {
  render() {
    return (
      <div id="DayTwo">
          <div id="Nav3">
            <Navigation />
          </div>
        <br />
      <div >
  
    <br />
    <br />
        <center>

        <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/lineup+opt+2.jpg" alt="faq" style={{"width":"70%"}} />
        <br />
    <DayNav />

    <br />
    <br />
    <br />

         DAY TWO DESCRIPTION /  AGENDA GOES HERE

    </center>

    <br />
    <br />
    <br />

      </div>
      </div>
    );
  }
}

export default DayTwo; 