import React, { Component } from 'react';
import { Carousel }  from 'react-bootstrap';

class LandingCarousel extends Component {
  render() {
    return (
      <div className="carousel">
      <br />
      <br />
      <br />

      <Carousel
      interval={3000}
      >


  <Carousel.Item>
    <img width={1300}  alt="Jane1" src="https://s3-us-west-1.amazonaws.com/mont-general/final/1+new+photo+2.jpg" />
  </Carousel.Item>

  <Carousel.Item>
    <img width={1300} alt="Jane2" src="https://s3-us-west-1.amazonaws.com/mont-general/final/carosel+3+option+1.jpg"  />
  </Carousel.Item>

  <Carousel.Item>
    <img width={1300} alt="Jane3" src="https://s3-us-west-1.amazonaws.com/mont-general/final/carosel+3+option+4.jpg" />
  </Carousel.Item>

  <Carousel.Item>
    <img width={1300} alt="Jane4" src="https://s3-us-west-1.amazonaws.com/mont-general/final/carosel+4.jpg" />
  </Carousel.Item>

</Carousel>
      </div>
    );
  }
}

export default LandingCarousel; 