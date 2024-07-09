// Login.js
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //Initialize Google Sign-In
    window.google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID",
      callback: handleGoogleSignIn,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("google-signin-button"),
      { theme: "outline", size: "large" }
    );
  }, []);

  const handleGoogleSignIn = (response) => {
    console.log(response.credential);
    // Assuming Google sign-in is successful, store token and navigate
    localStorage.setItem("token", response.credential);
    navigate("/tracking");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Assume login is successful
    localStorage.setItem("token", "dummy-token"); // Dummy token for demonstration
    navigate("/tracking");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md min-h-[700px]">
        <h2 className="text-5xl font-bold mb-3 ">Login to your account</h2>
        <p className="mb-14 text-gray-600">Please sign in to your account</p>
        <form onSubmit={handleLogin}>
          <p className="text-gray-900">Email Address</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="w-full ml-2 p-2 mb-4 bg-white rounded border-solid border-gray-300 border-2"
          />

          <p className="text-gray-900">Password</p>
          <div className="relative w-full mb-4">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full ml-2 p-2 mb-4 border-solid border-gray-300 border-2 rounded"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-2 top-2 text-gray-400"
            >
              {passwordVisible ? "👁️" : "👁️"}
            </button>
          </div>
          <div className="flex justify-end mt-4">
            <Link href="/" className="text-yellow-500 hover:text-yellow-700">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-yellow-500 hover:bg-yellow-800 rounded-3xl mt-2 mb-4 text-black "
          >
            Sign-in
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <p>Or sign in with</p>
        </div>
        <div className="mt-4 text-center">
          <div id="google-signin-button" className="rounded-2xl mb-4"></div>
        </div>
        <p className="mt-8 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-yellow-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
