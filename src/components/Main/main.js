import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../images/car11.png';
import img2 from '../images/car30.jpg';
import img3 from '../images/car80.jpg';
import '../../App.css';

function Slider() {
  return (
    <>
      <Carousel>
        <div className="main">
          <img src={img1} alt="car2" />
          <section className="car-info">
            <h2>Vesca car1</h2>
            <p>car 1 details</p>
            <div className="price">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <div className="price even">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <div className="price">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <div className="price even">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <p>
              <span>5.9% APR </span>
              representative
            </p>
            <button type="submit">View Details</button>
          </section>
        </div>
        <div className="main">
          <img src={img2} alt="car2" />
          <section className="car-info">
            <h2>car 1</h2>
            <p>car 1 details</p>
            <div className="price">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <div className="price even">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <div className="price">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <div className="price even">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <p>
              <span>5.9% APR </span>
              representative
            </p>
            <button type="submit">View Details</button>
          </section>
        </div>
        <div className="main">
          <img src={img3} alt="car2" />
          <section className="car-info">
            <h2>car 1</h2>
            <p>car 1 details</p>
            <div className="price">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <div className="price even">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <div className="price">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <div className="price even">
              <p>Finance Fee</p>
              <p>$129</p>
            </div>
            <p>
              <span>5.9% APR </span>
              representative
            </p>
            <button type="submit">View Details</button>
          </section>
        </div>
      </Carousel>
    </>
  );
}

export default Slider;