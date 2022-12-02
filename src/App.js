import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Slider from './components/Main/main';
import Latest from './components/Main/latest';
import './App.css';

import SignUpPage from './components/SignUpPage';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Slider />
        <Latest />
      </div>
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
