import React, { Component } from 'react';
import DayNav from './DayNav';
import Navigation from './Navigation';


class JNO extends Component {
  render() {
    return (
        <div id="JNOJane">
        <div id="Nav3">
        <Navigation />
        <br />
      <div>
      </div>
    <br />
    <br />
        <center>

        <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/lineup+opt+3.jpg" alt="faq" style={{"width":"80%"}} />
        <br />
    <DayNav />

    <br />
<div className= "daynav">
 <img src="https://s3-us-west-1.amazonaws.com/mont-general/jno+graphic+lineup.png" alt="faq" style={{"width":"50%"}} />
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

export default JNO; 