
import React, { Component } from 'react';
import LandingCarousel from './LandingCarousel';
import LandingBottom from './LandingBottom';
import Video from './Video';

class Home extends Component {
  render() {
    return (
      <div>
      
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
        </center>
      </div> 
    );
  }
}

export default Home; 
