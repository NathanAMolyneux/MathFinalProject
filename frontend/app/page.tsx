"use client";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { username, password });
  };

  const handleSignUp = () => {
    // Handle sign up navigation here
    console.log("Sign up clicked");
  };

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
      {/* Landing page text at top left */}
      <div className="absolute top-4 left-4 text-gray-400 text-sm">
        Landing page
      </div>

      {/* Main content area */}
      <div className="bg-gray-300 w-full max-w-5xl rounded-lg shadow-2xl p-8 min-h-[600px] flex flex-col">
        {/* Header Banner */}
        <div className="bg-white rounded-t-lg p-6 mb-6 text-center">
          <h1 className="text-2xl font-bold text-black mb-1">
            Smart Service Request Management System
          </h1>
          <h2 className="text-xl font-bold text-black">(SRMS)</h2>
        </div>

        {/* Main content area with form and help section */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6">
          {/* Login Form Section */}
          <div className="flex-1 flex flex-col justify-center">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Username Field */}
              <div className="flex items-center gap-4">
                <label htmlFor="username" className="text-black font-medium min-w-[100px]">
                  Username:
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1 px-4 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password Field */}
              <div className="flex items-center gap-4">
                <label htmlFor="password" className="text-black font-medium min-w-[100px]">
                  Password:
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 px-4 py-2 rounded border border-gray-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end pr-[100px]">
                <a href="#" className="text-red-600 text-sm hover:underline">
                  Forgot password
                </a>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 rounded text-white font-semibold bg-gradient-to-r from-cyan-400 to-green-500 hover:from-cyan-500 hover:to-green-600 transition-all shadow-md"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={handleSignUp}
                  className="flex-1 py-3 px-6 rounded text-white font-semibold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all shadow-md"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>

          {/* Help Section */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg border-2 border-blue-300 p-6 h-full">
              <h3 className="text-blue-600 font-bold text-lg mb-4">Need help?</h3>
              <ul className="space-y-3 text-sm text-black">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Forgot your password? → Click "Forgot password" above.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    New user? → Select "Sign Up" to create your account.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Trouble logging in? → Ensure your username matches your university email.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    For technical issues, contact:{" "}
                    <a href="mailto:support@mnsu.edu" className="text-blue-600 hover:underline">
                      support@mnsu.edu
                    </a>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Office Hours: Mon-Fri, 8:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-400 text-center text-sm text-black">
          <span>@2025</span>
          <span className="mx-2">•</span>
          <span>Smart Service Request Management System</span>
          <span className="mx-2">•</span>
          <span>MNSU IT Support</span>
        </div>
      </div>
    </div>
  );
}
