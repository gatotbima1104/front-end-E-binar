import React from 'react'
import {Container, Carousel} from 'react-bootstrap';
import banner from '../asset/banner.png';
import banner1 from '../asset/banner1.png';
import banner3 from '../asset/banner3.png';
import banner2 from '../asset/banner2.png';

const Banner = () => {
  return (
    <div>
      <Container className='mt-5'>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner}
            alt="First slide"
          />
        </Carousel.Item>
         <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={banner1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="forth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
    </div>
  )
}

export default Banner
