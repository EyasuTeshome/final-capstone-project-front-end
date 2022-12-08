/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SpinnerRoundOutlined } from 'spinners-react';
import { ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { getCarsStatus, getCarsError, createCar } from '../redux/carSlice';
import Navbar from './Navbar';
import './AddCar.css';
import { handleToast } from '../redux/utils';

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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const status = useSelector(getCarsStatus);
  const error = useSelector(getCarsError);
  let isLoading = false;

  useEffect(() => {
    if (status === 'loading') {
      isLoading = true;
    }
    if (error) handleToast(error);
  }, [status, dispatch]);

  const onSubmit = (data) => {
    dispatch(createCar(data));
    handleToast('Car added successfully');
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
              <input {...register('name')} placeholder="Name" />
              <p>{errors.name?.message}</p>

              <input {...register('brand')} placeholder="Brand" />
              <p>{errors.brand?.message}</p>

              <input
                {...register('optionToPurchaseFee')}
                placeholder="Option to Purchase Fee"
              />
              <p>{errors.optionToPurchaseFee?.message}</p>

              <input
                {...register('totalAmountPayable')}
                placeholder="Total Amount Payable at the end of the contract"
              />
              <p>{errors.totalAmountPayable?.message}</p>

              <input {...register('duration')} placeholder="Duration" />
              <p>{errors.duration?.message}</p>

              <input {...register('image')} placeholder="Image Url" />
              <p>{errors.image?.message}</p>

              <button className="submit-btn" type="submit">
                {isLoading ? (
                  <SpinnerRoundOutlined color="black" size={100} />
                ) : (
                  'Add Car'
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
