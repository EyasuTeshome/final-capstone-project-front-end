import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { ChromePicker } from 'react-color';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Container from './Container';
import './DetailsPage.css';

import { getDetailsView } from '../redux/carSlice';

function DetailsPage() {
  const [currentColor, setCurrentColor] = useState('#97bf10');
  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
  };
  const carData = useSelector(getDetailsView);
  const renderDetails = carData.map((car) => (
    <div key={car.id}>
      <div className="details-container">
        <div className="details-main">
          <div className="img-back" />
          <Fade>
            <img src={car.image} alt="car2" className="details-img" />
          </Fade>
          <Fade right cascade>
            <section className="car-info">
              <div className="title">
                <h2>{car.name}</h2>
                <p>{car.brand}</p>
              </div>
              <div className="price">
                <span>
                  <p>Total Amount</p>
                  <h5>
                    $
                    {car.total_amount_payable}
                  </h5>
                </span>
                <span>
                  <p>Optional to Purchase</p>
                  <h5>
                    $
                    {car.option_to_purchase_fee}
                  </h5>
                </span>
                <span>
                  <p>Duration</p>
                  <h5>
                    $
                    {car.duration}
                  </h5>
                </span>
              </div>
              <ChromePicker
                color={currentColor}
                onChangeComplete={handleOnChange}
                className="color"
              />
              <Link to="/reserve" className="details-btn link">
                Reserve
              </Link>
            </section>
          </Fade>
        </div>
      </div>
    </div>
  ));

  return (
    <Container>
      {renderDetails}
    </Container>
  );
}

export default DetailsPage;
