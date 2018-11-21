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
        <div className ="lineupimage">
        <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/lineup+opt+3.jpg" alt="faq" style={{"width":"100%"}}/>
        </div>

    <DayNav />

    <br />
<div className= "jno">
 <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/jno%2Bgraphic%2Blineup_edited-3.jpg" alt="faq" style={{"width":"100%"}} />
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