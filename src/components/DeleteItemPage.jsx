import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SpinnerRoundOutlined } from "spinners-react";
import { ToastContainer } from "react-toastify";
import { handleToast } from "../redux/utils";
import "./DeleteItem.css";
import "react-toastify/dist/ReactToastify.css";

import {
  getAllCars,
  getCarsStatus,
  getCarsError,
  fetchCars,
  deleteCar,
  getDeleteStatus,
} from "../redux/carSlice";

import Container from "./Container";

const DeleteItemPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getAllCars);
  const status = useSelector(getCarsStatus);
  const deleteStatus = useSelector(getDeleteStatus);
  const error = useSelector(getCarsError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCars());
    }
  }, [status, dispatch]);

  const handleDeleteItem = async (id) => {
    const res = await dispatch(deleteCar(id));
    if (res.meta.requestStatus === "fulfilled") {
      handleToast("successfully deleted item");
    } else if (res.meta.requestStatus === "rejected") {
      handleToast("failed to delete item");
    }
  };

  let content;
  if (status === "loading") {
    content = (
      <div className="loader">
        Loading Cars ..
        <SpinnerRoundOutlined color="black" size={100} />
      </div>
    );
  } else if (status === "succeeded") {
    content = cars.map((car, index) => (
      <div key={car.id} className="delete-container">
        <div className="car-name">
          <span>{index + 1}</span>
          <h3>{car.name}</h3>
        </div>

        {car.deleted ? (
          <i className="fa-solid fa-circle-check" />
        ) : (
          <button
            onClick={() => handleDeleteItem(car.id)}
            type="button"
            className="btn btn-danger"
          >
            {deleteStatus === "Deleting" ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>
    ));
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }
  return (
    <Container>
      <div className="container">
        <ToastContainer />
        <div className="main-container">
          <h1 className="delete-title">Delete Item from list</h1>
          {content}
        </div>
      </div>
    </Container>
  );
};
export default DeleteItemPage;
