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
              <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/lineup+opt+4.jpg" alt="faq" style={{"width":"80%"}} />
                <br />
    
                 <DayNav />

                <br />

                <div className="agenda">
                  When you register for the conference, you get to choose three round table sessions.
                  <br />
                  <br />
                  A round table session consists of a small group of sellers and one topic expert who will lead the discussion.
                  There is limited setating at each table so make sure to sign up quickly so you can get the table of your choice.
                </div>
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