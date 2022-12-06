import React from 'react';
import { SketchPicker } from 'react-color';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from './Container';
import './DetailsPage.css';

import { getDetailsView } from '../redux/carSlice';

function DetailsPage() {
  const carData = useSelector(getDetailsView);
  const navigate = useNavigate();
  const renderDetails = carData.map((car) => (
    <div key={car.id}>
      <div className="details-container">
        <div className="details-main">
          <div className="img-back" />
          <img src={car.image} alt="car2" className="details-img" />
          <section className="car-info">
            <div className="title">
              <h2>{car.name}</h2>
              <p>{car.brand}</p>
            </div>
            <div className="price">
              <p>Total Payable Amount</p>
              <h5>
                $
                {car.total_amount_payable}

              </h5>
            </div>
            <div className="price">
              <p>Optional to Purchase</p>
              <h5>
                $
                {car.option_to_purchase_fee}
              </h5>
            </div>
            <div className="price">
              <p>Duration</p>
              <h5>
                $
                {car.duration}
              </h5>
            </div>
            <SketchPicker className="color" />
            <button type="submit" className="details-btn">
              Reserve
            </button>
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
