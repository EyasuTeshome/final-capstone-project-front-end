import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { SpinnerRoundOutlined } from 'spinners-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  logInUser,
  logInUserStatus,
  logInUserError,
} from '../redux/loginSlice';
import './Auth.css';
import { handleToast } from '../redux/utils';

export default function LogInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.user);
  const status = useSelector(logInUserStatus);
  const error = useSelector(logInUserError);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // If the user is already logged in redirect to home page
  useEffect(() => {
    if (user.data) navigate('/');
    // toast if error
    if (error) handleToast(error);
  }, [user, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
  };

  let isLoading = false;
  if (status === 'loading') {
    isLoading = true;
  }

  return (
    <div className="background">
      <div className="layer">
        <ToastContainer />

        <div className="auth-page">
          <h1>LOG IN</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />

            <button type="submit" className="form-btn">
              {isLoading ? (
                <span>
                  Logging in
                  <SpinnerRoundOutlined color="black" size={40} />
                </span>
              ) : (
                'Log In'
              )}
            </button>

            <Link className="auth-link" to="/sign_up">
              Don&apos;t have an account?
              <br />
              Sign up here.
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
