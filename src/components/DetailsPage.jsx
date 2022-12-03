import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from './Container';
// import img1 from './images/car11.png';

import { getDetailsView } from '../redux/carSlice';

function DetailsPage() {
  const carData = useSelector(getDetailsView);
  const navigate = useNavigate();
  const renderDetails = carData.map((car) => (
    <div key={car.id}>
      <div className="main-container">
        <div className="main">
          <img src={car.image} alt="car2" />
          <section className="car-info">
            <h2>{car.name}</h2>
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
          </section>
        </div>
      </div>
    </div>
  ));

  return (
    <Container>
      {renderDetails}
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </Container>
  );
}

export default DetailsPage;
