import { useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-page h-100 d-flex align-items-center justify-content-center">
      <form>
        <input
          type="text"
          value={name}
          onClick={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onClick={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          onClick={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
}
