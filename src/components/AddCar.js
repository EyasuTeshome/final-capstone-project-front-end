import React from 'react';
import Navbar from './Navbar';
import './AddCar.css';

function AddCar() {
  return (
    <div className="add-car">
      <Navbar />
      <div className="layer">
        <div className="form-container">
          <div className="form">
            <h1>Add A New Car</h1>
            <form action="">
              <input
                className=""
                type="text"
                // value={}
                // onChange
                placeholder="Name"
              />
              <input
                className=""
                type="text"
                // value={}
                // onChange
                placeholder="Brand"
              />
              <input
                className=""
                type="number"
                // value={}
                // onChange
                placeholder="Option to purchase fee"
              />
              <input
                className=""
                type="number"
                // value={}
                // onChange
                placeholder="Total amount payable"
              />
              <input
                className=""
                type="number"
                // value={}
                // onChange
                placeholder="Duration"
              />
              <input
                className=""
                type="text"
                // value={}
                // onChange
                placeholder="Image Link"
              />
              <button className="submit-btn" type="submit">Add Car</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
