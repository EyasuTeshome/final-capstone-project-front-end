import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/" element={<Navbar />}>
            <Route index element={<div>Home Page</div>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
