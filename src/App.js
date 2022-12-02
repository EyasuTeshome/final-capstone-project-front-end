import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';

import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/sign_up" element={<SignUpPage />} />
          {/* If the user isnt logged it, redirect all urls to sign up page */}
          {user.data ? (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/details" element={<DetailsPage />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/sign_up" />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
