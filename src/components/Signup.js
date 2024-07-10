import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }
    // Assume signup is successful
    alert("User created successfully");
    navigate("/Tracking");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md min-h-[700px]">
        <h2 className="text-3xl font-bold mb-3">Create your new account</h2>
        <p className="text-gray-600 mb-14">
          Create an account to start looking for the food you like
        </p>
        <form onSubmit={handleSignup}>
          <p className="text-gray-900">Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full ml-2 p-2 mb-4 bg-white rounded border-solid border-gray-300 border-2"
            required
          />
          <p className="text-gray-900">Email Address</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full ml-2 p-2 mb-4 bg-white rounded border-solid border-gray-300 border-2"
            required
          />
          <p className="text-gray-900">Password</p>
          <div className="relative w-full">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full ml-2 p-2 mb-4 bg-white rounded border-solid border-gray-300 border-2"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-2 top-2 text-gray-400"
            >
              {passwordVisible ? "👁️" : "👁️"}
            </button>
          </div>
          <p className="text-gray-900">Confirm password</p>
          <div className="relative w-full mb-4">
            <input
              type={passwordVisible ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full ml-2 p-2 mb-4 bg-white rounded border-solid border-gray-300 border-2"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-2 top-2 text-gray-400"
            >
              {passwordVisible ? "👁️" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-yellow-500 hover:bg-yellow-600 rounded-3xl text-black"
          >
            Sign Up
          </button>
          <div className="flex justify-center mt-4">
            <p>Or sign in with</p>
          </div>
          <div className="mt-4 text-center">
            <div id="google-signin-button" className="rounded-2xl mb-4"></div>
          </div>
          <p className="mt-4 text-center">
            Have an account?{" "}
            <Link to="/Login" className="text-yellow-500">
              Signin
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
