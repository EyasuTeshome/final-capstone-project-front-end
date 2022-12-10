import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SpinnerRoundOutlined } from "spinners-react";
import { useNavigate } from "react-router-dom";

import {
  fetchReservations,
  getStatus,
  getError,
  getAllReservations,
} from "../redux/reservationSlice";

import { getCarDetails, fetchCars } from "../redux/carSlice";

import Container from "./Container";
// import "./DeleteItem.css";
// import "./DetailsPage.css";
import "./myreservation.css";

const MyReservations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reservations = useSelector(getAllReservations);
  const { cars } = useSelector((state) => state.cars);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCars());
      dispatch(fetchReservations());
    }
  }, [status, dispatch]);

  const showDetailsPage = (id) => {
    dispatch(getCarDetails(id));
    navigate(`/cars/${id}`);
  };

  const findCar = (reservation) => {
    const car = cars.find((car) => car.id === reservation.car_id);
    if (car) {
      return <td>{cars.find((car) => car.id === reservation.car_id).name}</td>;
    }
    return null;
  };

  let content;
  if (status === "loading") {
    content = (
      <div className="loader">
        Loading reservations ..
        <SpinnerRoundOutlined color="black" size={100} />
      </div>
    );
  } else if (status === "succeeded") {
    content = reservations.map((reservation, index) => (
      <tr key={reservation.id}>
        <td data-label="#">{index + 1}</td>
        {findCar(reservation)}
        <td data-label="Name">Hello</td>
        <td data-label="City">{reservation.city}</td>
        <td data-label="Date">{reservation.date}</td>
        <td data-label="Action">
          <button
            onClick={() => showDetailsPage(reservation.car_id)}
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
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }
  return (
    <Container>
      <div className="details-container">
        <div className="table-div">
          <h1 className="delete-title">My Reservations List</h1>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>City</th>
                <th>Date</th>
                <th>Action</th>
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
