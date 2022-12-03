import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getAllCars,
  getCarsStatus,
  getCarsError,
  fetchCars,
} from '../redux/carSlice';

import Container from './Container';
import Latest from './Main/latest';
import Slider from './Main/main';

const HomePage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getAllCars);
  const status = useSelector(getCarsStatus);
  const error = useSelector(getCarsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCars());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (status === 'succeeded') {
    content = cars.map((car) => (
      <div key={car.id} className="cars">
        <h3>{car.name}</h3>
        <p>{car.brand}</p>
        <p>{car.duration}</p>
        <p>{car.total_amount_payable}</p>
        <p>{car.option_to_purchase_fee}</p>
        <img src={car.image} alt="car" />
        {/* <Slider
          name={car.name}
          brand={car.brand}
          duration={car.duration}
          totalAmountPayable={car.total_amount_payable}
          image={car.image}
          optionFee={car.option_to_purchase_fee}
        /> */}
      </div>
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }
  return (
    <Container>
      <div className="main-container">
        <Slider />
        <Latest />
        {content}
      </div>
    </Container>
  );
};
export default HomePage;
