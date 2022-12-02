import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logInUser } from "../redux/userSlice";
import "../Auth.css";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // If the user is already logged in redirect to home page
  useEffect(() => {
    if (user.data) navigate("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
  };

  return (
    <div className="background">
      <div className="layer">
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
              NEXT
            </button>

            <Link className="auth-link" to="/sign_up">
              Don&apos;t have an account? Sign up here.
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
