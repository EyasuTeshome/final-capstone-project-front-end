import { useState } from "react";
import { useSelector } from "react-redux";

export default function ReservePage() {
  const CITIES = ["London", "New York", "Berlin", "Paris"];
  const { cars } = useSelector((state) => state.cars);
  console.log(cars);
  const [city, setCity] = useState("London");
  const [car, setCar] = useState(cars[0].id);
  const [date, setDate] = useState("");

  return (
    <div>
      <h1>BOOK A TESLA TEST - RIDE</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <form>
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
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="button">Book Now</button>
      </form>
    </div>
  );
}
