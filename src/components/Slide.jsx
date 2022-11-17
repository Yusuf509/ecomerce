import React from 'react'
import "./slide.css"
import Carousel from 'react-bootstrap/Carousel';

export default function Slide() {
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block img"
          src="6.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img"
          src="7.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img"
          src="5.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
