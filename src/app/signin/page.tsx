"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignIn) {
      alert(`Sign In!\nEmail: ${email}\nPassword: ${password}`);
    } else {
      alert(`Sign Up!\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full min-w-lg rounded-3xl shadow-2xl p-8 md:p-10 space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          {isSignIn ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-center text-gray-500 text-sm">
          {isSignIn
            ? "Sign in to continue to your account"
            : "Sign up to get started"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isSignIn && (
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition placeholder-gray-400"
                placeholder="Your Name"
                required
              />
            </div>
          )}

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition placeholder-gray-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-2xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition placeholder-gray-400"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-2xl text-lg shadow-md hover:bg-indigo-700 transition"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-indigo-600 font-medium hover:underline focus:outline-none"
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>

        <div className="flex items-center justify-center space-x-3">
          <span className="h-px w-10 bg-gray-300"></span>
          <span className="text-gray-400 text-sm">OR</span>
          <span className="h-px w-10 bg-gray-300"></span>
        </div>

        <div className="flex justify-center gap-4">
          <button className="flex items-center justify-center flex-1 py-3 rounded-2xl border border-gray-300 text-gray-700 transition gap-2">
            <FcGoogle className="w-5 h-5" /> Google
          </button>
        </div>
      </div>
    </div>
  );
}
