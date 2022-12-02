import React from 'react';
import Container from './Container';
import img1 from './images/car11.png';

function DetailsPage() {
  return (
    <Container>
      <div className="main-container">
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
      </div>
    </Container>
  );
}

export default DetailsPage;
