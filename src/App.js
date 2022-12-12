import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import SignUpPage from "./components/SignUpPage";
import DetailsPage from "./components/DetailsPage";
import LogInPage from "./components/LogInPage";
import AddCar from "./components/AddCar";
import DeleteItemPage from "./components/DeleteItemPage";
import ReservePage from "./components/ReservePage";
import MainPage from "./components/MainPage";
import MyReservations from "./components/MyReservations";

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/log_in" element={<LogInPage />} />
          {/* If the user isnt logged it, redirect all urls to sign up page */}
          {user.data ? (
            <>
              <Route path="/" element={<MainPage />} />
              <Route path="/cars/:id" element={<DetailsPage />} />
              <Route path="/reserve" element={<ReservePage />} />
              <Route path="/add_car" element={<AddCar />} />
              <Route path="/delete_car" element={<DeleteItemPage />} />
              <Route path="/my_reservations" element={<MyReservations />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/sign_up" />} />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
