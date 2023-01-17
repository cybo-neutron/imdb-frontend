import React, { useRef } from "react";
import authService from "../services/auth";

function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const adminRef = useRef(null);

  function handleClick() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const admin = adminRef.current.checked;
    authService.register(email, password, admin);
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-y-3">
        <div className="flex flex-col gap-y-3 bg-gray-300 p-5 rounded-md">
          <h2 className="text-center font-bold text-2xl">REGISTER</h2>
          <input type="text" placeholder="Email" name="email" ref={emailRef} />
          <input
            type="text"
            placeholder="Password"
            name="password"
            ref={passwordRef}
          />
          <div>
            <input type="checkbox" name="admin" id="" ref={adminRef} /> Admin
          </div>

          <button className="bg-orange-400 w-full" onClick={handleClick}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
