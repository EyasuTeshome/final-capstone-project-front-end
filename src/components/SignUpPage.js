import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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

      // const resJson = await res.json();
      if (res.status === 200) {
        navigate("/");
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
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />

            <button type="submit" className="form-btn">
              NEXT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
