import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SpinnerRoundOutlined } from 'spinners-react';
import { useNavigate } from 'react-router-dom';

import {
  fetchReservations,
  getStatus,
  getError,
  getAllReservations,
} from '../redux/reservationSlice';

import { getCarDetails, fetchCars } from '../redux/carSlice';

import Container from './Container';
import './DeleteItem.css';
import './DetailsPage.css';

const MyReservations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservations = useSelector(getAllReservations);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCars());
      dispatch(fetchReservations());
    }
  }, [status, dispatch]);

  const showDetailsPage = (id) => {
    dispatch(getCarDetails(id));
    navigate(`/cars/${id}`);
  };
  let content;
  if (status === 'loading') {
    content = (
      <div className="loader">
        Loading reservations ..
        <SpinnerRoundOutlined color="black" size={100} />
      </div>
    );
  } else if (status === 'succeeded') {
    content = reservations.map((reservation, index) => (
      <tr key={reservation.id}>
        <th scope="row">{index + 1}</th>
        <td>{reservation.car.name}</td>
        <td>{reservation.city}</td>
        <td>{reservation.date}</td>

        <td>
          <button
            onClick={() => showDetailsPage(reservation.car.id)}
            className="btn btn-primary"
            style={{
              width: 100,
            }}
            type="button"
          >
            View Car
          </button>
        </td>
      </tr>
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }
  return (
    <Container>
      <div className="details-container">
        <div className="table">
          <h1 className="delete-title">My reservations List</h1>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Car Name</th>
                <th scope="col">City</th>
                <th scope="col">Date</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};
export default MyReservations;
