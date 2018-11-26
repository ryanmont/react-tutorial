import React, { Component } from 'react';
import { Carousel }  from 'react-bootstrap';

class QuoteCarousel extends Component {
  render() {
    return (
      <div className="carousel">
          <Carousel
      interval={4000}
      >

        <Carousel.Item>
            <img width={1200}  alt="quote1" src ="https://s3-us-west-1.amazonaws.com/mont-general/final/quote1final.jpg"  />
        </Carousel.Item>

        <Carousel.Item>
            <img width={1200} alt="quote2" src="https://s3-us-west-1.amazonaws.com/mont-general/final/quote2final.jpg" />
        </Carousel.Item>

        </Carousel>
        <br />
      </div>
    );
  }
}

export default QuoteCarousel; 