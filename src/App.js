import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/Navbar";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign_up" element={<SignUpPage />} />
          {/* If the user isnt logged it, redirect all urls to sign up page */}
          {user.data ? (
            <Route path="/" element={<Navbar />}>
              <Route index element={<div>Home Page</div>} />
            </Route>
          ) : (
            <Route path="*" element={<Navigate to="/sign_up" />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
