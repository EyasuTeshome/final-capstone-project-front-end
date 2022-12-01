import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Router>
        <Routes>
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/sign_in" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
