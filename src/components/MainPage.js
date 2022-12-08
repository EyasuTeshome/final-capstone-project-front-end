/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './main.css';
import Slider from 'react-slick';

import { useSelector, useDispatch } from 'react-redux';
import { SpinnerRoundOutlined } from 'spinners-react';
import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';

import {
  getAllCars,
  getCarsStatus,
  // getCarsError,
  fetchCars,
  // getCarDetails,
} from '../redux/carSlice';

function MainPage() {
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const cars = useSelector(getAllCars);
  const status = useSelector(getCarsStatus);
  // const error = useSelector(getCarsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCars());
    }
  }, [status, dispatch]);

  // const showDetailsPage = (id) => {
  //   dispatch(getCarDetails(id));
  //   navigate(`/cars/${id}`);
  // };

  let content;
  if (status === 'loading') {
    content = (
      <div className="loader">
        Loading Cars ..
        <SpinnerRoundOutlined color="black" size={100} />
      </div>
    );
  } else if (status === 'succeeded') {
    content = cars.map((car) => (
      // eslint-disable-next-line react/jsx-key
      <div className="card">
        <div className="car-background">
          <div className="card-top">
            <img
              src={car.image}
              alt={car.name}
            />
          </div>
        </div>
        <h1 className="carname">{car.name}</h1>
        {/* <div className="card-bottom">
          <h3>{car.name}</h3>
        </div> */}
      </div>
    ));
  }

  