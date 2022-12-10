/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SpinnerRoundOutlined } from "spinners-react";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { getCarsStatus, getCarsError, createCar } from "../redux/carSlice";
import Navbar from "./Navbar";
import "./AddCar.css";
import { handleToast } from "../redux/utils";

const schema = yup
  .object({
    name: yup.string().required(),
    brand: yup.string().required(),
    image: yup.string().required(),
    duration: yup.number().positive().integer().required(),
    totalAmountPayable: yup.number().positive().integer().required(),
    optionToPurchaseFee: yup.number().positive().integer().required(),
  })
  .required();

function AddCar() {
  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const status = useSelector(getCarsStatus);
  const error = useSelector(getCarsError);
  let isLoading = false;

  useEffect(() => {
    if (status === "loading") {
      isLoading = true;
    }
    if (error) handleToast(error);
  }, [status, dispatch]);

  const onSubmit = async (data) => {
    const res = await dispatch(createCar(data));
    if (res.meta.requestStatus === "fulfilled") {
      handleToast("Car added successfully");
    }
  };

  return (
    <div className="add-car">
      <Navbar />
      <ToastContainer />
      <div className="layer">
        <div className="form-container">
          <div className="form">
            <h1>Add A New Car</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="add-car-form">
              <input required {...register("name")} placeholder="Name" />

              <input required {...register("brand")} placeholder="Brand" />

              <input
                required
                type="number"
                min="1"
                max="10000000"
                {...register("optionToPurchaseFee")}
                placeholder="Option to Purchase Fee"
              />

              <input
                required
                type="number"
                min="1"
                max="10000000"
                {...register("totalAmountPayable")}
                placeholder="Total Amount Payable at the end of the contract"
              />

              <input
                required
                type="number"
                min="1"
                max="10000000"
                {...register("duration")}
                placeholder="Duration"
              />

              <input required {...register("image")} placeholder="Image Url" />

              <button className="submit-btn" type="submit">
                {isLoading ? (
                  <SpinnerRoundOutlined color="black" size={100} />
                ) : (
                  "Add Car"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
