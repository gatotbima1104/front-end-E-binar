import React from 'react'
import {Container, Carousel} from 'react-bootstrap';
import banner2 from '../asset/banner2.png';

const Banner = () => {
  return (
    <div>
      <Container>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner2}
            alt="First slide"
          />
        </Carousel.Item>
         {/* <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item> */}
        {/*<Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
        </Carousel.Item> */}
      </Carousel>
    </Container>
    </div>
  )
}

export default Banner
