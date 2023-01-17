import React, { useRef } from "react";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleClick() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log({ email, password });
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-y-3">
        <div className="flex flex-col gap-y-3 bg-gray-300 p-5 rounded-md">
          <h2 className="text-center font-bold text-2xl">LOGIN</h2>
          <input type="text" placeholder="Email" name="email" ref={emailRef} />
          <input
            type="text"
            placeholder="Password"
            name="password"
            ref={passwordRef}
          />
          <button className="bg-orange-400 w-full" onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
