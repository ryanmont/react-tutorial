
import React, { Component } from 'react';
import LandingCarousel from './LandingCarousel';
import LandingBottom from './LandingBottom';
import Video from './Video';
import Navigation from './Navigation';

class Home extends Component {
  render() {
    return (
      <div id="Nav1">
      <div>
      <Navigation />
         <center>
        <div className ="landing-top">
            <LandingCarousel />
        </div>

            <LandingBottom />          

              <br />
            <Video />

            <br />
            <img src="https://s3-us-west-1.amazonaws.com/mont-general/quote+graphic.jpg" alt="faq" style={{"width":"100%"}} />
            <br />

                        <br />
            <img src="https://s3-us-west-1.amazonaws.com/mont-general/quote+graphic3.jpg" alt="faq" style={{"width":"100%"}} />
            <br />
            <br />
        </center>
      </div> 
      </div>
    );
  }
}

export default Home; 
