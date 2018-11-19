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

        <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/lineup+opt+2.jpg" alt="faq" style={{"width":"80%"}} />
        <br />
    <DayNav />
    <br />

        <div className="agenda">
          CEO Keynote <br />
          Product Announcements <br />
          Break Out Sessions <br />
          Service <br />
          Seller Speaker <br />
          Rachel Hollis <br />
        </div>

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