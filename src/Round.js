import React, { Component } from 'react';
import DayNav from './DayNav';
import Navigation from './Navigation';


class Round extends Component {
  render() {
    return (
        <div id="Round">
          <div id="Nav3">
             <Navigation />
             <br />
           <div>
            <br />
            <br />
            <center>
              <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/lineup+opt+4.jpg" alt="faq" style={{"width":"70%"}} />
                <br />
    
                 <DayNav />

                <br />
                <br />
                <br />

              Round Table DESCRIPTION /  AGENDA GOES HERE

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

export default Round; 