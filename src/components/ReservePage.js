import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { handleToast } from "../redux/utils";
import "./reservations.css";

export default function ReservePage() {
  const CITIES = ["London", "New York", "Berlin", "Paris"];
  // const { cars } = useSelector((state) => state.cars);
  const cars = [{ name: "bugatti", id: 6 }];
  const { data } = useSelector((state) => state.user);
  const [city, setCity] = useState("London");
  const [car, setCar] = useState(cars[0].id);
  const dateObject = new Date();
  dateObject.setDate(dateObject.getDate());
  const today = dateObject.toISOString().substring(0, 10);
  const [date, setDate] = useState(today);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reservation: {
            user_id: data.id,
            city,
            car_id: car,
            date,
          },
        }),
      });

      const msg = await res.json();

      if (res.status === 201) {
        handleToast("Created Reservation Succesfully");
      } else {
        handleToast(
          <p>
            {msg.error}
            <br />
            {msg.exception}
          </p>
        );
      }
    } catch (err) {
      handleToast(err.message);
    }
  };

  return (
    <div className="reserve-background">
      <div className="reserve-layer">
        <div className="reserve-page">
          <ToastContainer />
          <h1 className="reserve-title">BOOK A TESLA TEST - RIDE</h1>
          <p className="reserve-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <form className="reserve-form" onSubmit={handleSubmit}>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              name="cities"
              id="cities"
            >
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <select
              value={car}
              onChange={(e) => setCar(e.target.value)}
              name="cars"
              id="cars"
            >
              {cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name}
                </option>
              ))}
            </select>

            <input
              className="reserve-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button className="reserve-btn" type="submit">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
