import { useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="background">
      <div className="layer">
        <div className="auth-page">
          <h1>SIGN UP</h1>
          <form>
            <input
              type="text"
              value={name}
              onClick={(e) => setName(e.target.value)}
              placeholder="name"
            />
            <input
              type="text"
              value={email}
              onClick={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <input
              type="text"
              value={password}
              onClick={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
