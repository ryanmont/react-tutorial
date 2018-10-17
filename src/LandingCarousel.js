import React, { Component } from 'react';
import { Carousel }  from 'react-bootstrap';

class LandingCarousel extends Component {
  render() {
    return (
      <div className="carousel">
      <br />
      <br />
      <br />

      <Carousel>
  {/* <Carousel.Item>
    <img src="https://s3-us-west-1.amazonaws.com/mont-general/condensed+design+faq.jpg"  alt="faq" src="/carousel.png" style={{"width":"600px"}} />

    </Carousel.Item> */}

  <Carousel.Item>
    <img width={1600}  alt="Jane1" src="https://s3-us-west-1.amazonaws.com/mont-general/carosel+1.jpg" />
  </Carousel.Item>

  <Carousel.Item>
    <img width={1600} alt="Jane2" src="https://s3-us-west-1.amazonaws.com/mont-general/carosel+2.jpg" />
  </Carousel.Item>

  <Carousel.Item>
    <img width={1600} alt="Jane3" src="https://s3-us-west-1.amazonaws.com/mont-general/carosel+3.jpg" />
  </Carousel.Item>

  <Carousel.Item>
    <img width={1600} alt="Jane4" src="https://s3-us-west-1.amazonaws.com/mont-general/carosel+4+copy3.jpg" />
  </Carousel.Item>

</Carousel>
      </div>
    );
  }
}

export default LandingCarousel; 