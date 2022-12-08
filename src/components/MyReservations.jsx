import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SpinnerRoundOutlined } from 'spinners-react';

import {
  fetchReservations,
  getStatus,
  getError,
  getAllReservations,
} from '../redux/reservationSlice';

import Container from './Container';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector(getAllReservations);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReservations());
    }
  }, [status, dispatch]);

  let content;
  if (status === 'loading') {
    content = (
      <div className="loader">
        Loading reservations ..
        <SpinnerRoundOutlined color="black" size={100} />
      </div>
    );
  } else if (status === 'succeeded') {
    content = reservations.map((reservation) => (
      <div key={reservation.id}>
        <h3>{reservation.city}</h3>
        <p>{reservation.created_at}</p>
        <p>{reservation.car_id}</p>
        <p>{reservation.date}</p>
      </div>
    ));
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }
  return (
    <Container>
      <div className="main-container">{content}</div>
    </Container>
  );
};
export default MyReservations;
