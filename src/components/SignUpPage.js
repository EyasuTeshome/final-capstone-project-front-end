import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logInUser } from "../redux/userSlice";
import '../Auth.css';

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // If the user is already logged in redirect to home page
  useEffect(() => {
    if (user.data) navigate("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation checks if name is empty or password is less than 6 chars
    if (!name.trim() || password.length < 6) {
      setIsValid(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            name,
            email,
            password,
          },
        }),
      });

      if (res.status === 200) {
        dispatch(logInUser({ name, email, password }));
      } else {
        alert("some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="background">
      <div className="layer">
        <div className="auth-page">
          <h1>SIGN UP</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
                className={!isValid && !name.trim() ? "red-border" : ""}
              />
              {!isValid && !name.trim() && (
                <span className="invalid-input">Can&apos;t be empty</span>
              )}
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <div className="input-container">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className={!isValid && password.length < 6 ? "red-border" : ""}
              />
              {!isValid && password.length < 6 && (
                <span className="invalid-input">
                  Must be over 6 charachters long
                </span>
              )}
            </div>

            <button type="submit" className="form-btn">
              NEXT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
