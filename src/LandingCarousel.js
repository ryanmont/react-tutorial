import React, { Component } from 'react';
import { Carousel }  from 'react-bootstrap';

class LandingCarousel extends Component {
  render() {
    return (
      <div className="carousel">
      <br />

      <Carousel
      interval={3000}
      >

      <Carousel.Item>
        <img width={1200}  alt="Jane1" src="https://s3-us-west-1.amazonaws.com/mont-general/final/carousel+1+j.jpg" />
      </Carousel.Item>

      <Carousel.Item>
        <img width={1200} alt="Jane2" src="https://s3-us-west-1.amazonaws.com/mont-general/580+1200+copy+4.jpg"  />
      </Carousel.Item>

      <Carousel.Item>
        <img width={1200} alt="Jane3" src="https://s3-us-west-1.amazonaws.com/mont-general/final/carousel+3.jpg" />
      </Carousel.Item>

      <Carousel.Item>
        <img width={1200} alt="Jane4" src="https://s3-us-west-1.amazonaws.com/mont-general/final/carousel+4.jpg" />
      </Carousel.Item>

    </Carousel>
      </div>
    );
  }
}

export default LandingCarousel; 