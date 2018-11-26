
import React, { Component } from 'react';
import Navigation from './Navigation';
import LandingCarousel from './LandingCarousel';
import Video from './Video';
import QuoteCarousel from './QuoteCarousel';

class Land extends Component {
  render() {
    return (

        <div className="App">
        <div id="Nav5">
        <Navigation />
        <center>
            <br />
            <br />
            <div className = "home2">

           <LandingCarousel />
              <br />
              <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/getreadyfinal2.jpg" alt="faq" style={{"width":"100%"}} />
              <br />
              <br />
              <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/carosel+3+option+4.jpg" alt="faq" style={{"width":"100%"}} />
              <br />
              <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/2018+highlights.jpg" alt="faq" style={{"width":"100%"}} />
              <br />
              <Video />
              <br />
              <img src="https://s3-us-west-1.amazonaws.com/mont-general/580+1200+copy+4.jpg" alt="faq" style={{"width":"100%"}} />
              <br />
              <img src ="https://s3-us-west-1.amazonaws.com/mont-general/final/hollis+gargan1.jpg" alt="speakers" style={{"width":"100%"}} />
              <br />

              <QuoteCarousel />
              <a  href="https://janecon2019.regfox.com/janecon-2019">
                <img src="https://s3-us-west-1.amazonaws.com/mont-general/final/frame%2Bbottom4.jpg" alt="faq" style={{"width":"100%"}} />
              </a>

          </div>
          <br />
          <br />
       </center>
       </div>
       </div>
    );
  }
}

export default Land; 


