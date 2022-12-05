import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SpinnerRoundOutlined } from 'spinners-react';
import { useNavigate } from 'react-router-dom';
import './DeleteItem.css';

import {
  getAllCars,
  getCarsStatus,
  getCarsError,
  fetchCars,
  deleteCar,
} from '../redux/carSlice';

import Container from './Container';

const DeleteItemPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cars = useSelector(getAllCars);
  const status = useSelector(getCarsStatus);
  const error = useSelector(getCarsError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCars());
    }
  }, [status, dispatch]);

  const handleDeleteItem = (id) => {
    dispatch(deleteCar(id));
    navigate(`/delete_car`);
  };

  let content;
  if (status === 'loading') {
    content = (
      <div className="loader">
        Loading Cars ..
        <SpinnerRoundOutlined color="black" size={100} />
      </div>
    );
  } else if (status === 'succeeded') {
    content = cars.map((car, index) => (
      <div key={car.id} className="delete-container">
        <div className="car-name">
          <span>{index + 1}</span>
          <h3>{car.name}</h3>
        </div>

        <button
          onClick={() => handleDeleteItem(car.id)}
          type="button"
          className="btn btn-danger"
        >
          {status === 'deleting' ? 'Deleting..' : 'Delete'}
        </button>
      </div>
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }
  return (
    <Container>
      <div className="container">
        <div className="main-container">
          <h1 className="delete-title">Delete Item from list</h1>
          {content}
        </div>
      </div>
    </Container>
  );
};
export default DeleteItemPage;
