/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SpinnerRoundOutlined } from "spinners-react";
import Container from "./Container";
import "./DetailsPage.css";

import {
  fetchCarDetails,
  getDetailsView,
  getDetailsStatus,
} from "../redux/carSlice";

function DetailsPage() {
  const [currentColor, setCurrentColor] = useState("#97bf10");
  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
  };

  const carData = useSelector(getDetailsView);
  const status = useSelector(getDetailsStatus);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (!carData) {
      dispatch(fetchCarDetails(params.id));
    }
  }, []);

  let renderDetails;
  if (carData) {
    renderDetails = (
      <div key={carData.id}>
        <div className="details-container">
          <div className="details-main">
            <div className="img-back" />
            <Fade>
              <img src={carData.image} alt="car2" className="details-img" />
            </Fade>
            <Fade right cascade>
              <section className="car-info">
                <div className="title">
                  <h2>{carData.name}</h2>
                  <p>{carData.brand}</p>
                </div>
                <div className="price">
                  <span>
                    <p>Total Amount</p>
                    <h5>${carData.total_amount_payable}</h5>
                  </span>
                  <span>
                    <p>Optional to Purchase</p>
                    <h5>${carData.option_to_purchase_fee}</h5>
                  </span>
                  <span>
                    <p>Duration</p>
                    <h5>${carData.duration}</h5>
                  </span>
                </div>
                <ChromePicker
                  color={currentColor}
                  onChangeComplete={handleOnChange}
                  className="color"
                />
                <Link to="/reserve" className="details-btn link">
                  Reserve
                </Link>
              </section>
            </Fade>
          </div>
        </div>
      </div>
    );
  } else if (status === "loading") {
    renderDetails = (
      <div className="loader">
        Loading Cars ..
        <SpinnerRoundOutlined color="black" size={100} />
      </div>
    );
  }

  return <Container>{renderDetails}</Container>;
}

export default DetailsPage;
