import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { API_URL, handleToast } from '../redux/utils';
import Navbar from './Navbar';

const Container = ({ children }) => {
  const user = useSelector((state) => state.user);

  const onLogout = async () => {
    try {
      const res = await fetch(`${API_URL}/users/sign_out`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: user.data.auth,
        },
      });
      const { message } = await res.json();

      if (res.status === 200) {
        localStorage.removeItem('user');
        window.location.reload();
      }
      handleToast({ msg: message, type: 'success' });
    } catch (err) {
      handleToast({ msg: err.message, type: 'error' });
    }
  };

  return (
    <div>
      <div className="children">{children}</div>
      <ToastContainer />
      <button type="button" onClick={onLogout} className="log-out-btn">
        <i className="fa-solid fa-power-off" />
      </button>
      <div className="all">
        <Navbar />
      </div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
