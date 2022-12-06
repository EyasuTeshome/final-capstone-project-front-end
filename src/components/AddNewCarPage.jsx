import React, { userState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SpinnerRoundOutlined } from 'spinners-react';
import { useNavigate } from 'react-router-dom';

import { getCarsStatus, getCarsError, createCar } from '../redux/carSlice';

const AddNewCarPage = () => {
  const initialFormState = {
    name: '',
    brand: '',
    duration: '',
    totalAmountPayable: '',
    optionToPurchaseFee: '',
    image: '',
  };
  const [car, setCar] = useState(initialFormState);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(getCarsStatus);
  const error = useSelector(getCarsError);

  return (
    <div>
      <h1>Add New Car Page</h1>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="brand">Brand</label>
        <input type="text" name="brand" id="brand" />
        <label htmlFor="duration">Duration</label>
        <input type="text" name="duration" id="duration" />
        <label htmlFor="totalAmountPayable">Total Amount Payable</label>
        <input type="text" name="totalAmountPayable" id="totalAmountPayable" />
        <label htmlFor="optionToPurchaseFee">Option To Purchase Fee</label>
        <input
          type="text"
          name="optionToPurchaseFee"
          id="optionToPurchaseFee"
        />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddNewCarPage;
