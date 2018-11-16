import React, { Component } from 'react';
import DayNav from './DayNav';


class DayOne extends Component {
  render() {
    return (
        <div id="DayOne">
      <div >
    <br />
    <br />
        <center>

        <img src="https://s3-us-west-1.amazonaws.com/mont-general/jane+night+out+photo.jpg" alt="faq" style={{"width":"70%"}} />
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
    );
  }
}

export default DayOne; 