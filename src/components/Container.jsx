import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { handleToast } from "../redux/utils";
import Navbar from "./Navbar";
/* eslint-disable */

const Container = ({ children }) => {
  const user = useSelector((state) => state.user);

  const onLogout = async () => {
    try {
      const res = await fetch("http://localhost:3000/users/sign_out", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: user.data.auth,
        },
      });
      const { message } = await res.json();

      if (res.status === 200) {
      } else {
      }
      handleToast(message);
    } catch (err) {
      handleToast(err.message);
      console.log(err);
    }
  };

  return (
    <div>
      <div className="children">{children}</div>
      <ToastContainer />
      <div onClick={onLogout} className="log-out-btn">
        LOG OUT
      </div>
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
