import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);
  return (
    <div className="">
      <div className="">
        <input
          type="text"
          className=""
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=""
        />
        <button
          className=""
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/signup">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;