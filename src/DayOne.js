import React, { Component } from 'react';
import DayNav from './DayNav';
import Navigation from './Navigation';


class DayOne extends Component {
  render() {
    return (
        <div id="DayOne">
         <div id="Nav3">
        <Navigation />
        <br />
      <div >
    <br />
    <br />
        <center>

        <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/lineup+opt+1.jpg" alt="faq" style={{"width":"70%"}} />
        <br />
    <DayNav />

    <br />
    <br />
    <br />

         DAY ONE DESCRIPTION /  AGENDA GOES HERE

    </center>

    <br />
    <br />
    <br />

      </div>
      </div>
      </div>
    );
  }
}

export default DayOne; 