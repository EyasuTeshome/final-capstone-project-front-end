import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SpinnerRoundOutlined } from 'spinners-react';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { getCarsStatus, getCarsError, createCar } from '../redux/carSlice';
import Navbar from './Navbar';
import './AddCar.css';
import { handleToast } from '../redux/utils';

function AddCar() {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [optionToPurchaseFee, setOptionToPurchaseFee] = useState(0);
  const [totalAmountPayable, setTotalAmountPayable] = useState(0);
  const [duration, setDuration] = useState(0);
  const [image, setImage] = useState('');

  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      brand,
      optionToPurchaseFee,
      totalAmountPayable,
      duration,
      image,
    };
    console.log(data, 'newly created data');
    dispatch(createCar(data));
    navigate('/');
  };

  return (
    <div className="add-car">
      <Navbar />
      <ToastContainer />
      <div className="layer">
        <div className="form-container">
          <div className="form">
            <h1>Add A New Car</h1>
            <form onSubmit={handleSubmit}>
              <input
                className=""
                type="text"
                value={name}
                onChange={(e) => setName(e.valueue)}
                placeholder="Name"
              />
              <input
                className=""
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.value)}
                placeholder="Brand"
              />
              <input
                className=""
                type="number"
                value={optionToPurchaseFee}
                onChange={(e) => setOptionToPurchaseFee(e.value)}
                placeholder="Option to purchase fee"
              />
              <input
                className=""
                type="number"
                value={totalAmountPayable}
                onChange={(e) => setTotalAmountPayable(e.value)}
                placeholder="Total amount payable"
              />
              <input
                className=""
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.value)}
                placeholder="Duration"
              />
              <input
                className=""
                type="text"
                value={image}
                onChange={(e) => setImage(e.value)}
                placeholder="Image Link"
              />
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
