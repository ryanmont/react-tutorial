import React, { Component } from 'react';
import { Carousel }  from 'react-bootstrap';

class LineupCarousel extends Component {
  render() {
    return (
      <div className="carousel">
      <Carousel>

  <Carousel.Item>
    <img width={1600}  alt="Jane1" src="https://s3-us-west-1.amazonaws.com/mont-general/THURSDAY+1+photo.jpg" />
  </Carousel.Item>

  <Carousel.Item>
    <img width={1600} alt="Jane2" src="https://s3-us-west-1.amazonaws.com/mont-general/FRIDAY+1+photo.jpg" />
  </Carousel.Item>

  <Carousel.Item>
    <img width={1600} alt="Jane3" src="https://s3-us-west-1.amazonaws.com/mont-general/jane+night+out+photo.jpg" />
  </Carousel.Item>

</Carousel>
<br />
      </div>
    );
  }
}

export default LineupCarousel; 